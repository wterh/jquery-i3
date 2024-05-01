/**
 * jQuery i3-UI Toast
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Toast constructor.
     * @param {Object} options - User options.
     */
    function Toast(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Toast.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the toast container (required).
            element: null,
            // Toast message.
            message: '',
            // Toast type: 'success', 'info', 'warning', or 'danger'.
            type: 'info',
            // Toast alignment: 'left', 'center', or 'right'.
            alignment: 'center',
            // Timeout before hiding the toast (in milliseconds).
            timeout: 3000,
            // Callback function when the toast is hidden.
            onHide: null,
        },

        /**
         * Initialize the toast.
         */
        init: function () {
            this.createToast()
            this.show()
        },

        /**
         * Create the toast DOM elements.
         */
        createToast: function () {
            const toastClass = `toast toast--${this.options.alignment} toast--${this.options.type}`
            this.$toast = $(`<div class="${toastClass} is-hidden">${this.options.message}</div>`)

            this.$element.append(this.$toast)
        },

        /**
         * Show the toast.
         */
        show: function () {
            this.$toast.removeClass('is-hidden')

            const self = this

            setTimeout(function () {
                self.hide()
            }, this.options.timeout)
        },

        /**
         * Hide the toast.
         */
        hide: function () {
            this.$toast.addClass('is-hidden')

            if (typeof this.options.onHide === 'function') {
                this.options.onHide()
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Toast = function (options) {
        return new Toast(options)
    }
})(jQuery)
