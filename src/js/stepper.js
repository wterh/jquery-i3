/**
 jQuery i3-UI Stepper
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Stepper constructor.
     * @param {Object} options - User options.
     */
    function Stepper(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Stepper.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the stepper container (required).
            element: null,
            // Minimum value of the stepper.
            min: 0,
            // Maximum value of the stepper.
            max: 10,
            // Initial value of the stepper.
            value: 0,
            // Step value for incrementing and decrementing.
            step: 1,
            // Callback function when the stepper value changes.
            onChange: null,
        },

        /**
         * Initialize the stepper.
         */
        init: function () {
            this.$input = $('<input type="text" class="stepper__input">').val(this.options.value)
            this.$decrementButton = $(`<button type="button" class="stepper__button" disabled>&minus;</button>`)
            this.$incrementButton = $(`<button type="button" class="stepper__button">&plus;</button>`)

            this.$element.addClass('stepper').append(this.$decrementButton, this.$input, this.$incrementButton)
            this.bindEvents()
        },

        /**
         * Bind events to the stepper.
         */
        bindEvents: function () {
            this.$decrementButton.on('click', this.decrement.bind(this))
            this.$incrementButton.on('click', this.increment.bind(this))
        },

        /**
         * Decrement the stepper value.
         */
        decrement: function () {
            const newValue = this.options.value - this.options.step

            if (newValue >= this.options.min) {
                this.setValue(newValue)
            }
        },

        /**
         * Increment the stepper value.
         */
        increment: function () {
            const newValue = this.options.value + this.options.step

            if (newValue <= this.options.max) {
                this.setValue(newValue)
            }
        },

        /**
         * Set the stepper value.
         * @param {number} value - Value to set.
         */
        setValue: function (value) {
            this.options.value = value
            this.$input.val(this.options.value)

            this.$decrementButton.prop('disabled', this.options.value <= this.options.min)
            this.$incrementButton.prop('disabled', this.options.value >= this.options.max)

            if (typeof this.options.onChange === 'function') {
                this.options.onChange(this.options.value)
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Stepper = function (options) {
        return new Stepper(options)
    }
})(jQuery)
