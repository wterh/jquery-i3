/**
 * jQuery i3-UI Preloader
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * Preloader constructor.
     * @param {Object} options - User options.
     */
    function Preloader(options) {
        this.options = $.extend({}, this.defaults, options)
        this.$body = $('body')
        this.init()
    }

    Preloader.prototype = {
        /**
         * Default options.
         * @type {Object}
         */
        defaults: {
            // Timeout before hiding the preloader (in milliseconds).
            timeout: 300,
            // Callback function when the preloader is hidden.
            onHide: null,
        },

        /**
         * Initialize the preloader.
         */
        init: function () {
            this.createPreloader()
            this.hidePreloader()
        },

        /**
         * Create the preloader DOM elements.
         */
        createPreloader: function () {
            this.$preloader = $(`
        <div class="preloader">
          <div class="preloader__spinner"></div>
        </div>
      `)

            this.$body.append(this.$preloader)
        },

        /**
         * Hide the preloader with a timeout.
         */
        hidePreloader: function () {
            const self = this

            setTimeout(function () {
                self.$preloader.remove()

                if (typeof self.options.onHide === 'function') {
                    self.options.onHide()
                }
            }, this.options.timeout)
        },
    }

    /**
     * jQuery plugin definition.
     * @param {Object} options - User options.
     */
    $.fn.i3Preloader = function (options) {
        return new Preloader(options)
    }
})(jQuery)