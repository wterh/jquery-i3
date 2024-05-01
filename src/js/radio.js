/**
 * jQuery i3-UI Radio
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Radio constructor.
     * @param {Object} options - User options.
     */
    function Radio(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Radio.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the radio container (required).
            element: null,
            // Layout type: 'list' or 'inline'.
            layout: 'list',
            // Name attribute for the radio inputs.
            name: '',
            // Selected value.
            value: '',
            // Callback function when the radio value changes.
            onChange: null,
        },

        /**
         * Initialize the radio.
         */
        init: function () {
            this.$radioList = $('<ul class="radio-list"></ul>')
            this.$element.append(this.$radioList)

            this.render()
            this.bindEvents()
        },

        /**
         * Render the radio items.
         */
        render: function () {
            this.$radioList.empty()

            const layout = this.options.layout === 'inline' ? 'radio-inline' : ''

            this.options.items.forEach((item) => {
                const $item = $(`
          <li class="radio-item ${item.value === this.options.value ? 'is-checked' : ''}">
            <input type="radio" class="radio" name="${this.options.name}" value="${item.value}">
            <span>${item.label}</span>
          </li>
        `)

                if (layout) {
                    $item.addClass(layout)
                }

                this.$radioList.append($item)
            })
        },

        /**
         * Bind events to the radio.
         */
        bindEvents: function () {
            this.$radioList.on('click', '.radio-item', this.onItemClick.bind(this))
        },

        /**
         * Handle radio item click event.
         * @param {Event} event - Click event.
         */
        onItemClick: function (event) {
            const $item = $(event.currentTarget)
            const value = $item.find('.radio').val()

            this.setValue(value)

            if (typeof this.options.onChange === 'function') {
                this.options.onChange(value)
            }
        },

        /**
         * Set the radio value.
         * @param {string} value - Value to set.
         */
        setValue: function (value) {
            this.options.value = value

            this.$radioList
                .find('.radio-item')
                .removeClass('is-checked')
                .find(`[value="${value}"]`)
                .parent()
                .addClass('is-checked')
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Radio = function (options) {
        return new Radio(options)
    }
})(jQuery)
