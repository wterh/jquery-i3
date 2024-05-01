/**
 * jQuery i3-UI Dialog
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Dialog constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function Dialog(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3Dialog.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    Dialog.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const template = `
        <div class="dialog-overlay">
          <div class="dialog">
            <button class="dialog__close" aria-label="Close">×</button>
            <div class="dialog__content">${this.options.content}</div>
            <div class="dialog__buttons">
              ${this.options.buttons
                .map(
                    (button) => `
                  <button class="dialog__button dialog__button--${button.type}">${button.text}</button>
                `
                )
                .join('')}
            </div>
          </div>
        </div>
      `
            this.element.append(template)
        },

        _bindEvents: function () {
            const self = this
            this.element.find('.dialog__close').on('click', function () {
                self.close()
            })
            this.element.find('.dialog__button').each(function (index) {
                $(this).on('click', function () {
                    self.options.onClick(index)
                    self.close()
                })
            })
        },

        open: function () {
            this.element.find('.dialog-overlay').addClass('dialog-overlay--visible')
        },

        close: function () {
            this.element.find('.dialog-overlay').removeClass('dialog-overlay--visible')
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3Dialog = function (options) {
        return this.each(function () {
            new Dialog($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3Dialog.defaults = {
        content: '', // {String} Content of the dialog (required)
        buttons: [
            // {Object} Buttons configuration (optional)
            // Example: [{text: 'OK', type: 'primary'}, {text: 'Cancel', type: 'secondary'}]
        ],
        onClick: function () {}, // {Function} Callback function when a button is clicked (optional)
    }
})(jQuery)
