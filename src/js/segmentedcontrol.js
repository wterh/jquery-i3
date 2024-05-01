/**
 jQuery i3-UI Segmented Control
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * SegmentedControl constructor.
     * @param {Object} options - User options.
     */
    function SegmentedControl(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    SegmentedControl.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the segmented control container (required).
            element: null,
            // Items for the segmented control.
            items: [],
            // Selected item index.
            selectedIndex: 0,
            // Callback function when the selected item changes.
            onChange: null,
        },

        /**
         * Initialize the segmented control.
         */
        init: function () {
            this.$items = $()

            this.render()
            this.bindEvents()
        },

        /**
         * Render the segmented control items.
         */
        render: function () {
            this.$items = this.options.items.map((item, index) => {
                const $item = $(`<div class="segmented-control__item ${index === this.options.selectedIndex ? 'is-selected' : ''}">${item}</div>`)
                this.$element.append($item)
                return $item
            })
        },

        /**
         * Bind events to the segmented control.
         */
        bindEvents: function () {
            this.$items.on('click', this.onItemClick.bind(this))
        },

        /**
         * Handle segmented control item click event.
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
    $.fn.i3SegmentedControl = function (options) {
        return new SegmentedControl(options)
    }
})(jQuery)
