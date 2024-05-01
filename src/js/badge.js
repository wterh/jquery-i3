/**
 * jQuery i3-UI Badge
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Badge constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function Badge(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3Badge.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    Badge.prototype = {
        _init: function () {
            this._render()
        },

        _render: function () {
            const template = `
        <span class="badge ${this.options.type ? `badge--${this.options.type}` : ''}">
          ${this.options.content}
        </span>
      `
            this.element.html(template)
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3Badge = function (options) {
        return this.each(function () {
            new Badge($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3Badge.defaults = {
        content: '', // {String} Content of the badge (required)
        type: '', // {String} Type of the badge (optional), can be used to apply custom styles
    }
})(jQuery)
