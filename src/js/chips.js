/**
 * jQuery i3-UI Chips
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Chips constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function Chips(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3Chips.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    Chips.prototype = {
        _init: function () {
            this.options.chips.forEach((chip) => {
                this._addChip(chip)
            })
        },

        _addChip: function (chip) {
            const chipType = chip.type || this.options.defaultType
            const template = `
        <div class="chips__item chips__item--${chipType} ${chip.deletable ? 'chips__item--deletable' : ''}">
          <span class="chips__content">${chip.content}</span>
          ${chip.deletable ? `<span class="chips__delete-btn">×</span>` : ''}
        </div>
      `
            this.element.append(template)

            if (chip.color) {
                this.element.find('.chips__item:last-child').css('background-color', chip.color)
            }

            if (chip.deletable) {
                this._bindDeleteEvent(this.element.find('.chips__delete-btn:last-child'))
            }
        },

        _bindDeleteEvent: function (deleteBtn) {
            const self = this
            deleteBtn.on('click', function () {
                $(this).closest('.chips__item').remove()
                self.options.onDelete && self.options.onDelete()
            })
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3Chips = function (options) {
        return this.each(function () {
            new Chips($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3Chips.defaults = {
        chips: [], // {Array} List of chips, example: [{content: 'Chip 1'}, {content: 'Chip 2', type: 'contact'}] (required)
        defaultType: 'outline', // {String} Default chip type (outline, contact, etc.) (optional)
        onDelete: null, // {Function} Callback function when a chip is deleted (optional)
    }
})(jQuery)
