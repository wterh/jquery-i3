/**
 jQuery i3-UI Navbar
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Navbar constructor.
     * @param {Object} options - User options.
     */
    function Navbar(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Navbar.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the navbar container (required).
            element: null,
            // Navbar size: 'small', 'medium', or 'large'.
            size: 'medium',
            // Flag to enable or disable sticky behavior.
            sticky: true,
        },

        /**
         * Initialize the navbar.
         */
        init: function () {
            this.setSize()

            if (this.options.sticky) {
                this.bindStickyEvents()
            }
        },

        /**
         * Set the navbar size.
         */
        setSize: function () {
            this.$element.addClass(`navbar--${this.options.size}`)
        },

        /**
         * Bind events for sticky behavior.
         */
        bindStickyEvents: function () {
            const self = this

            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 0) {
                    self.$element.addClass('is-sticky')
                } else {
                    self.$element.removeClass('is-sticky')
                }
            })
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Navbar = function (options) {
        return new Navbar(options)
    }
})(jQuery)
