/**
 * jQuery i3-UI Content Block
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * ContentBlock constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function ContentBlock(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3ContentBlock.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    ContentBlock.prototype = {
        _init: function () {
            this._render()
        },

        _render: function () {
            const template = `
        <div class="content-block ${this.options.type}">
          ${this.options.header ? `<div class="content-block__header">${this.options.header}</div>` : ''}
          <div class="content-block__content">${this.options.content}</div>
          ${this.options.footer ? `<div class="content-block__footer">${this.options.footer}</div>` : ''}
        </div>
      `
            this.element.html(template)
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3ContentBlock = function (options) {
        return this.each(function () {
            new ContentBlock($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3ContentBlock.defaults = {
        type: 'normal', // {String} Type of content block (normal, outline, inset, inset-outline, header, footer, header-footer) (optional)
        header: '', // {String} Header content (optional)
        content: '', // {String} Main content (required)
        footer: '', // {String} Footer content (optional)
    }
})(jQuery)
