/**
 jQuery i3-UI Toggle
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Toggle constructor.
     * @param {Object} options - User options.
     */
    function Toggle(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Toggle.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the toggle container (required).
            element: null,
            // Initial state of the toggle: true for checked, false for unchecked.
            state: false,
            // Callback function when the toggle state changes.
            onChange: null,
        },

        /**
         * Initialize the toggle.
         */
        init: function () {
            this.createToggle()
            this.bindEvents()
        },

        /**
         * Create the toggle DOM elements.
         */
        createToggle: function () {
            this.$input = $('<input type="checkbox" class="toggle__input">').attr('checked', this.options.state)
            this.$slider = $('<label class="toggle__slider"></label>')

            this.$element.addClass('toggle').append(this.$input, this.$slider)
        },

        /**
         * Bind events to the toggle.
         */
        bindEvents: function () {
            this.$input.on('change', this.onInputChange.bind(this))
        },

        /**
         * Handle toggle input change event.
         * @param {Event} event - Change event.
         */
        onInputChange: function (event) {
            this.options.state = event.target.checked

            if (typeof this.options.onChange === 'function') {
                this.options.onChange(this.options.state)
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Toggle = function (options) {
        return new Toggle(options)
    }
})(jQuery)
