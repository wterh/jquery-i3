/**
 * jQuery i3-UI Theme Switcher
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * ThemeSwitcher constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function ThemeSwitcher(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3ThemeSwitcher.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    ThemeSwitcher.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const selectTemplate = `
        <select class="theme-switcher">
          ${this.options.themes.map((theme) => {
                return `
              <option value="${theme.file}" ${theme.default ? 'selected' : ''}>
                ${theme.name}
              </option>
            `
            }).join('')}
        </select>
      `
            this.element.html(selectTemplate)
        },

        _bindEvents: function () {
            const self = this
            this.element.find('.theme-switcher').on('change', function () {
                const selectedTheme = $(this).val()
                self._switchTheme(selectedTheme)
            })
        },

        _switchTheme: function (themeFile) {
            this.options.themes.forEach((theme) => {
                if (theme.file === themeFile) {
                    this._loadCSS(theme.file)
                } else {
                    this._removeCSS(theme.file)
                }
            })
        },

        _loadCSS: function (file) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = file
            document.head.appendChild(link)
        },

        _removeCSS: function (file) {
            const links = document.querySelectorAll('link[rel="stylesheet"]')
            Array.from(links).forEach((link) => {
                if (link.href === file) {
                    document.head.removeChild(link)
                }
            })
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3ThemeSwitcher = function (options) {
        return this.each(function () {
            new ThemeSwitcher($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3ThemeSwitcher.defaults = {
        themes: [], // {Array} List of themes, example: [{name: 'Light', file: 'light.css', default: true}, {name: 'Dark', file: 'dark.css'}] (required)
    }
})(jQuery)
