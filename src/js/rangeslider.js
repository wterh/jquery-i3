/**
 jQuery i3-UI Range Slider
 @author WTERH
 * @author Your Name
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Range Slider constructor.
     * @param {Object} options - User options.
     */
    function RangeSlider(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    RangeSlider.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the range slider container (required).
            element: null,
            // Minimum value of the range slider.
            min: 0,
            // Maximum value of the range slider.
            max: 100,
            // Initial value of the range slider.
            value: 0,
            // Callback function when the range slider value changes.
            onChange: null,
        },

        /**
         * Initialize the range slider.
         */
        init: function () {
            this.$input = $('<input type="range">').attr({
                min: this.options.min,
                max: this.options.max,
                value: this.options.value,
            })

            this.$element.addClass('range-slider').append(this.$input)
            this.createSliderComponents()
            this.bindEvents()
        },

        /**
         * Create the range slider components.
         */
        createSliderComponents: function () {
            this.$track = $('<div class="range-slider__track"></div>')
            this.$fill = $('<div class="range-slider__fill"></div>')
            this.$thumb = $('<div class="range-slider__thumb"></div>')

            this.$element.append(this.$track, this.$fill, this.$thumb)
            this.updateSlider()
        },

        /**
         * Bind events to the range slider.
         */
        bindEvents: function () {
            this.$input.on('input', this.onInputChange.bind(this))
        },

        /**
         * Handle range slider input change event.
         * @param {Event} event - Input change event.
         */
        onInputChange: function (event) {
            this.options.value = event.target.value
            this.updateSlider()

            if (typeof this.options.onChange === 'function') {
                this.options.onChange(this.options.value)
            }
        },

        /**
         * Update the range slider components.
         */
        updateSlider: function () {
            const percent = ((this.options.value - this.options.min) / (this.options.max - this.options.min)) * 100

            this.$fill.css('width', `${percent}%`)
            this.$thumb.css('left', `${percent}%`)
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3RangeSlider = function (options) {
        return new RangeSlider(options)
    }
})(jQuery)
