/**
 * jQuery i3-UI List Button
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * ListButton constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function ListButton(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3ListButton.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    ListButton.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const template = `
        <div class="list-button">
          <button class="list-button__toggle">${this.options.toggleText}</button>
          <ul class="list-button__list">
            ${this.options.items
                .map(
                    (item) => `
              <li class="list-button__item">
                <a href="${item.href}" class="list-button__link">${item.text}</a>
              </li>
            `
                )
                .join('')}
          </ul>
        </div>
      `
            this.element.html(template)
        },

        _bindEvents: function () {
            const self = this
            this.element.find('.list-button__toggle').on('click', function () {
                self.element.find('.list-button__list').slideToggle()
            })
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3ListButton = function (options) {
        return this.each(function () {
            new ListButton($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3ListButton.defaults = {
        toggleText: 'Show list', // {String} Text for toggle button (optional)
        items: [], // {Array} List of items, example: [{text: 'Item 1', href: '#'}, {text: 'Item 2', href: '#'}] (required)
    }
})(jQuery)
