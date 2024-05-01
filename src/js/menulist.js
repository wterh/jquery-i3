/**
 * jQuery i3-UI Menu
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * MenuList constructor.
     * @param {Object} options - User options.
     */
    function MenuList(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    MenuList.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the menu list container (required).
            element: null,
            // Items for the menu list.
            items: [],
            // Callback function when a menu item is clicked.
            onClick: null,
        },

        /**
         * Initialize the menu list.
         */
        init: function () {
            this.render()
            this.bindEvents()
        },

        /**
         * Render the menu list items.
         */
        render: function () {
            this.options.items.forEach((item) => {
                const $item = $(`<li class="menu-list__item"></li>`)

                if (item.icon) {
                    $item.append(`<i class="menu-list__icon ${item.icon}"></i>`)
                }

                if (item.label) {
                    $item.append(`<span class="menu-list__label">${item.label}</span>`)
                }

                if (item.subtitle) {
                    $item.append(`<span class="menu-list__subtitle">${item.subtitle}</span>`)
                }

                if (item.link) {
                    $item.attr('data-link', item.link)
                }

                this.$element.append($item)
            })
        },

        /**
         * Bind events to the menu list.
         */
        bindEvents: function () {
            this.$element.on('click', '.menu-list__item', this.onItemClick.bind(this))
        },

        /**
         * Handle menu list item click event.
         * @param {Event} event - Click event.
         */
        onItemClick: function (event) {
            const $item = $(event.currentTarget)
            const index = this.$element.find('.menu-list__item').index($item)
            const link = $item.data('link')

            if (link) {
                window.location.href = link
                return
            }

            if (typeof this.options.onClick === 'function') {
                this.options.onClick(index, event)
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3MenuList = function (options) {
        return new MenuList(options)
    }
})(jQuery)
