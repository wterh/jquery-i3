/**
 * jQuery i3-UI List
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * List constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function List(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3List.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    List.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const template = `
        <ul class="js-list">
          ${this.options.items
                .map(
                    (item) => `
            <li class="js-list__item">
              <a href="${item.url}" class="js-list__link">${item.text}</a>
            </li>
          `
                )
                .join('')}
        </ul>
      `
            this.element.html(template)
        },

        _bindEvents: function () {
            // Add any event listeners here if needed
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3List = function (options) {
        return this.each(function () {
            new List($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3List.defaults = {
        items: [], // {Array} List of items, example: [{text: 'Item 1', url: '#'}, {text: 'Item 2', url: '#'}] (required)
    }
})(jQuery)
