/**
 * jQuery i3-UI Breadcrumbs
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Breadcrumbs constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function Breadcrumbs(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3Breadcrumbs.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    Breadcrumbs.prototype = {
        _init: function () {
            this._render()
        },

        _render: function () {
            const breadcrumbItems = this.options.items.map((item) => {
                return `
          <li class="breadcrumbs__item ${item.active ? 'breadcrumbs__item--active' : ''}">
            ${item.active ? `<span>${item.text}</span>` : `<a href="${item.href}">${item.text}</a>`}
          </li>
        `
            })

            const template = `
        <nav class="breadcrumbs">
          <ol class="breadcrumbs__list">
            ${breadcrumbItems.join('')}
          </ol>
        </nav>
      `
            this.element.html(template)
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3Breadcrumbs = function (options) {
        return this.each(function () {
            new Breadcrumbs($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3Breadcrumbs.defaults = {
        items: [], // {Array} List of breadcrumb items, example: [{text: 'Home', href: '/'}, {text: 'Category', href: '/category', active: true}] (required)
    }
})(jQuery)
