/**
 jQuery i3-UI Notification
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Notification constructor.
     * @param {Object} options - User options.
     */
    function Notification(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Notification.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the notification container (required).
            element: null,
            // Notification message.
            message: '',
            // Flag to show or hide the close button.
            showCloseButton: true,
            // Callback function when the notification is clicked.
            onClick: null,
            // Callback function when the close button is clicked.
            onClose: null,
        },

        /**
         * Initialize the notification.
         */
        init: function () {
            this.createNotification()
            this.bindEvents()
        },

        /**
         * Create the notification DOM elements.
         */
        createNotification: function () {
            this.$notification = $(`<div class="notification is-hidden">${this.options.message}</div>`)

            if (this.options.showCloseButton) {
                this.$closeButton = $(`<span class="notification__close">&times;</span>`)
                this.$notification.append(this.$closeButton)
            }

            $('body').append(this.$notification)
        },

        /**
         * Bind events to the notification.
         */
        bindEvents: function () {
            this.$notification.on('click', this.onNotificationClick.bind(this))
            this.$closeButton.on('click', this.onCloseButtonClick.bind(this))
        },

        /**
         * Handle notification click event.
         * @param {Event} event - Click event.
         */
        onNotificationClick: function (event) {
            if (typeof this.options.onClick === 'function') {
                this.options.onClick(event)
            }

            this.hide()
        },

        /**
         * Handle close button click event.
         * @param {Event} event - Click event.
         */
        onCloseButtonClick: function (event) {
            event.stopPropagation()

            if (typeof this.options.onClose === 'function') {
                this.options.onClose(event)
            }

            this.hide()
        },

        /**
         * Show the notification.
         */
        show: function () {
            this.$notification.removeClass('is-hidden')
        },

        /**
         * Hide the notification.
         */
        hide: function () {
            this.$notification.addClass('is-hidden')
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Notification = function (options) {
        return new Notification(options)
    }
})(jQuery)
