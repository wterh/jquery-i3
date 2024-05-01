/**
 * jQuery i3-UI Floating Action Button
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * FAB constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function FAB(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3Fab.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    FAB.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
            this._setPosition()
        },

        _render: function () {
            const template = `
        <button class="fab" aria-label="${this.options.ariaLabel}">
          <i class="${this.options.icon}"></i>
        </button>
      `
            this.element.html(template)
        },

        _bindEvents: function () {
            const self = this
            this.element.find('.fab').on('click', function () {
                self.options.onClick()
            })
        },

        _setPosition: function () {
            const position = this.options.position
            this.element.find('.fab').css({
                right: position.includes('right') ? '24px' : '',
                left: position.includes('left') ? '24px' : '',
                bottom: position.includes('bottom') ? '24px' : '',
                top: position.includes('top') ? '24px' : '',
                position: 'fixed',
                ...(position === 'center' && {
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }),
                ...(position === 'bottom-center' && {
                    left: '50%',
                    bottom: '24px',
                    transform: 'translateX(-50%)',
                }),
            })
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3Fab = function (options) {
        return this.each(function () {
            new FAB($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3Fab.defaults = {
        ariaLabel: 'Floating Action Button', // {String} Accessible name for the FAB (optional)
        icon: 'fas fa-plus', // {String} Icon class for the FAB (optional)
        onClick: function () {}, // {Function} Callback function when the FAB is clicked (optional)
        position: 'bottom-right', // {String} Position of the FAB (top-left, top-right, bottom-left, bottom-right, center, bottom-center) (optional)
    }
})(jQuery)
