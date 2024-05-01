/**
 * jQuery i3-UI Messages
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Messages constructor.
     * @param {Object} options - User options.
     */
    function Messages(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Messages.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the messages container (required).
            element: null,
            // Callback function when a new message is sent.
            onSend: null,
        },

        /**
         * Initialize the messages.
         */
        init: function () {
            this.createChat()
            this.createForm()
            this.bindEvents()
        },

        /**
         * Create the chat DOM elements.
         */
        createChat: function () {
            this.$chat = $('<div class="messages__chat"></div>')
            this.$element.append(this.$chat)
        },

        /**
         * Create the send form DOM elements.
         */
        createForm: function () {
            this.$form = $(
                `<form class="messages__form">
          <input type="text" class="messages__input" placeholder="Type your message...">
          <button type="submit" class="messages__send">Send</button>
        </form>`
            )

            this.$element.append(this.$form)
        },

        /**
         * Bind events to the messages.
         */
        bindEvents: function () {
            this.$form.on('submit', this.onFormSubmit.bind(this))
        },

        /**
         * Handle form submit event.
         * @param {Event} event - Submit event.
         */
        onFormSubmit: function (event) {
            event.preventDefault()

            const message = this.$form.find('.messages__input').val()

            if (message.trim()) {
                this.addMessage(message, 'self')

                if (typeof this.options.onSend === 'function') {
                    this.options.onSend(message)
                }

                this.$form.find('.messages__input').val('')
            }
        },

        /**
         * Add a new message to the chat.
         * @param {string} message - The message text.
         * @param {string} sender - The sender type ('self' or 'other').
         */
        addMessage: function (message, sender) {
            const $message = $(`<div class="messages__message messages__message--${sender}">${message}</div>`)
            this.$chat.append($message)

            this.$element.scrollTop(this.$element[0].scrollHeight)
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Messages = function (options) {
        return new Messages(options)
    }
})(jQuery)
