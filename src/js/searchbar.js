/**
 jQuery i3-UI Searchbar
 @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Searchbar constructor.
     * @param {Object} options - User options.
     */
    function Searchbar(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$element = $(this.options.element)
        this.init()
    }

    Searchbar.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Selector or DOM element of the searchbar container (required).
            element: null,
            // Placeholder text for the search input.
            placeholder: 'Search...',
            // Callback function when the search input value changes.
            onSearch: null,
        },

        /**
         * Initialize the searchbar.
         */
        init: function () {
            this.$input = $('<input type="text">').attr('placeholder', this.options.placeholder)
            this.$icon = $('<i class="searchbar__icon fa fa-search"></i>')

            this.$element.addClass('searchbar').append(this.$input, this.$icon)
            this.bindEvents()
        },

        /**
         * Bind events to the searchbar.
         */
        bindEvents: function () {
            this.$input.on('input', this.onInputChange.bind(this))
        },

        /**
         * Handle searchbar input change event.
         * @param {Event} event - Input change event.
         */
        onInputChange: function (event) {
            const value = event.target.value

            if (typeof this.options.onSearch === 'function') {
                this.options.onSearch(value)
            }
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Searchbar = function (options) {
        return new Searchbar(options)
    }
})(jQuery)
