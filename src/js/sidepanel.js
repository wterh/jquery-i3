/**
 jQuery i3-UI Side Panel
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * SidePanel constructor.
     * @param {Object} options - User options.
     */
    function SidePanel(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    SidePanel.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the side panel container (required).
            element: null,
            // Side panel alignment: 'left' or 'right'.
            alignment: 'left',
            // Callback function when the side panel is closed.
            onClose: null,
        },

        /**
         * Initialize the side panel.
         */
        init: function () {
            this.createOverlay()
            this.bindEvents()
        },

        /**
         * Create the side panel overlay.
         */
        createOverlay: function () {
            this.$overlay = $('<div class="side-panel__overlay"></div>')
            $('body').append(this.$overlay)
        },

        /**
         * Bind events to the side panel.
         */
        bindEvents: function () {
            this.$overlay.on('click', this.close.bind(this))
        },

        /**
         * Open the side panel.
         */
        open: function () {
            this.$element.addClass('is-visible')
        },

        /**
         * Close the side panel.
         */
        close: function () {
            this.$element.removeClass('is-visible')

            if (typeof this.options.onClose === 'function') {
                this.options.onClose()
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3SidePanel = function (options) {
        return new SidePanel(options)
    }
})(jQuery)
