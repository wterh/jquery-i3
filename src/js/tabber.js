/**
 jQuery i3-UI Tabber
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Tabber constructor.
     * @param {Object} options - User options.
     */
    function Tabber(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Tabber.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the tabber container (required).
            element: null,
            // Items for the tabber.
            items: [],
            // Selected item index.
            selectedIndex: 0,
            // Flag to show or hide tab text.
            showText: true,
            // Flag to show or hide tab icons.
            showIcons: true,
            // Callback function when the selected item changes.
            onChange: null,
        },

        /**
         * Initialize the tabber.
         */
        init: function () {
            this.$tabs = $()
            this.$contents = $()

            this.render()
            this.bindEvents()
        },

        /**
         * Render the tabber items and contents.
         */
        render: function () {
            const $tabs = $(`<div class="tabber__tabs"></div>`)
            const $contents = $(`<div></div>`)

            this.options.items.forEach((item, index) => {
                const $tab = $(`<div class="tabber__tab ${index === this.options.selectedIndex ? 'is-selected' : ''}"></div>`)

                if (this.options.showIcons && item.icon) {
                    $tab.append(`<i class="tabber__icon ${item.icon}"></i>`)
                }

                if (this.options.showText && item.text) {
                    $tab.append(`<span>${item.text}</span>`)
                }

                $tabs.append($tab)
                this.$tabs = this.$tabs.add($tab)

                const $content = $(`<div class="tabber__content" ${index === this.options.selectedIndex ? '' : 'style="display: none;"'}>${item.content}</div>`)
                $contents.append($content)
                this.$contents = this.$contents.add($content)
            })

            this.$element.addClass('tabber').append($tabs, $contents)
        },

        /**
         * Bind events to the tabber.
         */
        bindEvents: function () {
            this.$tabs.on('click', this.onTabClick.bind(this))
        },

        /**
         * Handle tabber tab click event.
         * @param {Event} event - Click event.
         */
        onTabClick: function (event) {
            const $tab = $(event.currentTarget)
            const index = this.$tabs.index($tab)

            this.setSelectedIndex(index)

            if (typeof this.options.onChange === 'function') {
                this.options.onChange(index)
            }
        },

        /**
         * Set the selected item index.
         * @param {number} index - Index of the item to select.
         */
        setSelectedIndex: function (index) {
            this.options.selectedIndex = index

            this.$tabs.removeClass('is-selected').eq(index).addClass('is-selected')
            this.$contents.hide().eq(index).show()
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Tabber = function (options) {
        return new Tabber(options)
    }
})(jQuery)
