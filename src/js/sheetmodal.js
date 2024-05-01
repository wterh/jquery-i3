/**
 jQuery i3-UI Sheet Modal
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * SheetModal constructor.
     * @param {Object} options - User options.
     */
    function SheetModal(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$body = $('body')
        this.init()
    }

    SheetModal.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Content HTML (required).
            content: null,
            // Callback function when the sheet modal is closed.
            onClose: null,
        },

        /**
         * Initialize the sheet modal.
         */
        init: function () {
            this.createSheetModal()
            this.bindEvents()
        },

        /**
         * Create the sheet modal DOM elements.
         */
        createSheetModal: function () {
            this.$sheetModal = $(`
        <div class="sheet-modal">
          <div class="sheet-modal__content">
            ${this.options.content}
            <div class="sheet-modal__close">&times;</div>
          </div>
        </div>
      `)

            this.$body.append(this.$sheetModal)
        },

        /**
         * Bind events to the sheet modal.
         */
        bindEvents: function () {
            this.$sheetModal.on('click', '.sheet-modal__close', this.close.bind(this))
        },

        /**
         * Open the sheet modal.
         */
        open: function () {
            this.$sheetModal.addClass('is-visible')
        },

        /**
         * Close the sheet modal.
         */
        close: function () {
            this.$sheetModal.removeClass('is-visible')

            if (typeof this.options.onClose === 'function') {
                this.options.onClose()
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3SheetModal = function (options) {
        return new SheetModal(options)
    }
})(jQuery)
