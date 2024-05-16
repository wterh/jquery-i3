/**
 * jQuery i3-UI Sticky
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Sticky constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function Sticky(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3Sticky.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    Sticky.prototype = {
        _init: function () {
            this._cacheDOM()
            this._bindEvents()
            this._setInitialPosition()
        },

        _cacheDOM: function () {
            this.$window = $(window)
            this.$stickyWrapper = $('<div class="sticky-wrapper"></div>')
            this.$sticky = this.element
        },

        _bindEvents: function () {
            this.$window.on('scroll', this._handleScroll.bind(this))
            this.$window.on('resize', this._handleResize.bind(this))
        },

        _setInitialPosition: function () {
            this.$stickyWrapper.insertBefore(this.$sticky)
            this.$sticky.appendTo(this.$stickyWrapper)
            this.initialTop = this.$stickyWrapper.offset().top
        },

        _handleScroll: function () {
            const scrollTop = this.$window.scrollTop()

            if (scrollTop >= this.initialTop) {
                this.$sticky.addClass('sticky')
            } else {
                this.$sticky.removeClass('sticky')
            }
        },

        _handleResize: function () {
            this.initialTop = this.$stickyWrapper.offset().top
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3Sticky = function (options) {
        return this.each(function () {
            new Sticky($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3Sticky.defaults = {}
})(jQuery)
