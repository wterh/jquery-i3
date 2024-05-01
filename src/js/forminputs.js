/**
 * jQuery i3-UI Form Inputs
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * FormInputs constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function FormInputs(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3FormInputs.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    FormInputs.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const template = `
        <div class="form-group ${this.options.type}">
          ${this.options.label ? `<label for="${this.options.id}">${this.options.label}</label>` : ''}
          <input
            type="${this.options.inputType}"
            id="${this.options.id}"
            name="${this.options.name}"
            class="form-control"
            placeholder="${this.options.placeholder}"
            value="${this.options.value}"
            required="${this.options.required}"
          >
          ${this.options.additionalInfo ? `<small class="form-text text-muted">${this.options.additionalInfo}</small>` : ''}
          ${this.options.clearButton ? `<span class="input-clear-btn">×</span>` : ''}
          ${this.options.validation ? `<div class="invalid-feedback">${this.options.validationMessage}</div>` : ''}
        </div>
      `
            this.element.html(template)
        },

        _bindEvents: function () {
            const self = this
            if (this.options.clearButton) {
                this.element.find('.input-clear-btn').on('click', function () {
                    self.element.find('input').val('').trigger('change')
                })
            }
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3FormInputs = function (options) {
        return this.each(function () {
            new FormInputs($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3FormInputs.defaults = {
        type: 'outline', // {String} Type of input field (outline, floating, outline-floating, etc.) (optional)
        label: '', // {String} Label for input field (optional)
        inputType: 'text', // {String} Type of input (text, email, password, etc.) (optional)
        id: '', // {String} ID for input field (optional)
        name: '', // {String} Name for input field (optional)
        placeholder: '', // {String} Placeholder for input field (optional)
        value: '', // {String} Initial value for input field (optional)
        required: false, // {Boolean} Is input field required (optional)
        clearButton: false, // {Boolean} Show clear button (optional)
        validation: false, // {Boolean} Enable validation (optional)
        validationMessage: 'Please enter a valid value', // {String} Validation error message (optional)
        additionalInfo: '', // {String} Additional info to display below input field (optional)
    }
})(jQuery)
