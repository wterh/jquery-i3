/**
 * jQuery i3-UI Progressbar
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Progressbar constructor.
     * @param {Object} options - User options.
     */
    function Progressbar(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Progressbar.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the progressbar container (required).
            element: null,
            // Initial value of the progressbar (from 0 to 100).
            value: 0,
            // Callback function when the progressbar value changes.
            onUpdate: null,
        },

        /**
         * Initialize the progressbar.
         */
        init: function () {
            this.$value = $('<div class="progressbar__value"></div>')
            this.$element.addClass('progressbar').append(this.$value)
            this.setValue(this.options.value)
        },

        /**
         * Set the progressbar value.
         * @param {number} value - Value from 0 to 100.
         */
        setValue: function (value) {
            value = Math.min(Math.max(value, 0), 100)
            this.$value.css('width', `${value}%`)

            if (typeof this.options.onUpdate === 'function') {
                this.options.onUpdate(value)
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Progressbar = function (options) {
        return new Progressbar(options)
    }
})(jQuery)
