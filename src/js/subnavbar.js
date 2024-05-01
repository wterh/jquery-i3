/**
 jQuery i3-UI Subnavbar
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Subnavbar constructor.
     * @param {Object} options - User options.
     */
    function Subnavbar(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Subnavbar.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the subnavbar container (required).
            element: null,
            // Items for the subnavbar.
            items: [],
            // Selected item index.
            selectedIndex: 0,
            // Callback function when the selected item changes.
            onChange: null,
        },

        /**
         * Initialize the subnavbar.
         */
        init: function () {
            this.$items = $()

            this.render()
            this.bindEvents()
        },

        /**
         * Render the subnavbar items.
         */
        render: function () {
            this.$items = this.options.items.map((item, index) => {
                const $item = $(`<div class="subnavbar__item ${index === this.options.selectedIndex ? 'is-selected' : ''}">${item}</div>`)
                this.$element.append($item)
                return $item
            })
        },

        /**
         * Bind events to the subnavbar.
         */
        bindEvents: function () {
            this.$items.on('click', this.onItemClick.bind(this))
        },

        /**
         * Handle subnavbar item click event.
         * @param {Event} event - Click event.
         */
        onItemClick: function (event) {
            const $item = $(event.currentTarget)
            const index = this.$items.index($item)

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

            this.$items.removeClass('is-selected').eq(index).addClass('is-selected')
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Subnavbar = function (options) {
        return new Subnavbar(options)
    }
})(jQuery)
