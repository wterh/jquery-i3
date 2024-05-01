/**
 jQuery i3-UI Toolbar
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Toolbar constructor.
     * @param {Object} options - User options.
     */
    function Toolbar(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Toolbar.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the toolbar container (required).
            element: null,
            // Toolbar alignment: 'top' or 'bottom'.
            alignment: 'top',
            // Buttons for the toolbar.
            buttons: [],
            // Callback function when a button is clicked.
            onClick: null,
        },

        /**
         * Initialize the toolbar.
         */
        init: function () {
            this.createToolbar()
            this.bindEvents()
        },

        /**
         * Create the toolbar DOM elements.
         */
        createToolbar: function () {
            this.$toolbar = $(`<div class="toolbar toolbar--${this.options.alignment}"></div>`)

            this.options.buttons.forEach((button) => {
                const $button = $(`<button class="toolbar__button">${button.text}</button>`)

                if (button.icon) {
                    $button.prepend(`<i class="${button.icon}"></i>`)
                }

                this.$toolbar.append($button)
            })

            this.$element.append(this.$toolbar)
        },

        /**
         * Bind events to the toolbar.
         */
        bindEvents: function () {
            this.$toolbar.on('click', '.toolbar__button', this.onButtonClick.bind(this))
        },

        /**
         * Handle toolbar button click event.
         * @param {Event} event - Click event.
         */
        onButtonClick: function (event) {
            const $button = $(event.currentTarget)
            const index = this.$toolbar.find('.toolbar__button').index($button)

            if (typeof this.options.onClick === 'function') {
                this.options.onClick(index)
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Toolbar = function (options) {
        return new Toolbar(options)
    }
})(jQuery)
