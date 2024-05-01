/**
 jQuery i3-UI Popover
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Popover constructor.
     * @param {Object} options - User options.
     */
    function Popover(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Popover.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the popover trigger (required).
            element: null,
            // Popover content: text or list of items.
            content: '',
            // Popover placement: 'top', 'bottom', 'left', or 'right'.
            placement: 'bottom',
            // Offset from the trigger element (in pixels).
            offset: 10,
            // Callback function when a list item is clicked.
            onClick: null,
        },

        /**
         * Initialize the popover.
         */
        init: function () {
            this.createPopover()
            this.bindEvents()
        },

        /**
         * Create the popover DOM elements.
         */
        createPopover: function () {
            this.$popover = $(`<div class="popover"></div>`)

            if (Array.isArray(this.options.content)) {
                const $list = $('<ul class="popover__list"></ul>')

                this.options.content.forEach((item) => {
                    const $item = $(`<li class="popover__item">${item}</li>`)
                    $list.append($item)
                })

                this.$popover.append($list)
            } else {
                this.$popover.text(this.options.content)
            }

            this.$arrow = $(`<div class="popover__arrow popover__arrow--${this.options.placement}"></div>`)
            this.$popover.append(this.$arrow)

            $('body').append(this.$popover)
        },

        /**
         * Bind events to the popover.
         */
        bindEvents: function () {
            this.$element.on('click', this.toggle.bind(this))
            this.$popover.on('click', '.popover__item', this.onItemClick.bind(this))
            $(document).on('click', this.hide.bind(this))
        },

        /**
         * Toggle the popover visibility.
         * @param {Event} event - Click event.
         */
        toggle: function (event) {
            event.stopPropagation()

            if (this.$popover.is(':visible')) {
                this.hide()
            } else {
                this.show()
            }
        },

        /**
         * Show the popover.
         */
        show: function () {
            const offset = this.options.offset
            const triggerRect = this.$element[0].getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

            let left, top

            switch (this.options.placement) {
                case 'top':
                    top = triggerRect.top + scrollTop - this.$popover.outerHeight() - offset
                    left = triggerRect.left + scrollLeft + (triggerRect.width - this.$popover.outerWidth()) / 2
                    break
                case 'bottom':
                    top = triggerRect.bottom + scrollTop + offset
                    left = triggerRect.left + scrollLeft + (triggerRect.width - this.$popover.outerWidth()) / 2
                    break
                case 'left':
                    top = triggerRect.top + scrollTop + (triggerRect.height - this.$popover.outerHeight()) / 2
                    left = triggerRect.left + scrollLeft - this.$popover.outerWidth() - offset
                    break
                case 'right':
                    top = triggerRect.top + scrollTop + (triggerRect.height - this.$popover.outerHeight()) / 2
                    left = triggerRect.right + scrollLeft + offset
                    break
            }

            this.$popover.css({ top, left }).show()
        },

        /**
         * Hide the popover.
         */
        hide: function () {
            this.$popover.hide()
        },

        /**
         * Handle popover list item click event.
         * @param {Event} event - Click event.
         */
        onItemClick: function (event) {
            const $item = $(event.currentTarget)
            const index = this.$popover.find('.popover__item').index($item)

            if (typeof this.options.onClick === 'function') {
                this.options.onClick(index)
            }

            this.hide()
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Popover = function (options) {
        return new Popover(options)
    }
})(jQuery)
