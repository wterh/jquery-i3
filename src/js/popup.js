/**
 * jQuery i3-UI Popup
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Popup constructor.
     * @param {Object} options - User options.
     */
    function Popup(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$body = $('body')
        this.init()
    }

    Popup.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Content HTML (required).
            content: null,
            // Callback function when the popup is closed.
            onClose: null,
        },

        /**
         * Initialize the popup.
         */
        init: function () {
            this.createPopup()
            this.bindEvents()
        },

        /**
         * Create the popup DOM elements.
         */
        createPopup: function () {
            this.$popup = $(`
        <div class="popup">
          <div class="popup__content">
            ${this.options.content}
            <div class="popup__close">&times;</div>
          </div>
        </div>
      `)

            this.$body.append(this.$popup)
        },

        /**
         * Bind events to the popup.
         */
        bindEvents: function () {
            this.$popup.on('click', '.popup__close', this.close.bind(this))
        },

        /**
         * Open the popup.
         */
        open: function () {
            this.$popup.addClass('is-visible')
        },

        /**
         * Close the popup.
         */
        close: function () {
            this.$popup.removeClass('is-visible')

            if (typeof this.options.onClose === 'function') {
                this.options.onClose()
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Popup = function (options) {
        return new Popup(options)
    }
})(jQuery)
