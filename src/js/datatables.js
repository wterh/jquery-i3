/**
 * jQuery i3-UI Data Tables
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * DataTables constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function DataTables(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3DataTables.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    DataTables.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const headerRow = `
        <tr>
          ${this.options.columns
                .map((column) => `<th>${column.title}</th>`)
                .join('')}
        </tr>
      `
            const bodyRows = this.options.data.map((row) => {
                return `
          <tr>
            ${this.options.columns
                    .map((column) => `<td>${row[column.data]}</td>`)
                    .join('')}
          </tr>
        `
            })

            this.element.find('thead').html(headerRow)
            this.element.find('tbody').html(bodyRows.join(''))
        },

        _bindEvents: function () {
            // Add any event listeners here if needed
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3DataTables = function (options) {
        return this.each(function () {
            new DataTables($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3DataTables.defaults = {
        columns: [], // {Array} Column configuration, example: [{title: 'Column 1', data: 'column1'}, {title: 'Column 2', data: 'column2'}] (required)
        data: [], // {Array} Data for the table, example: [{column1: 'Value 1', column2: 'Value 2'}, {column1: 'Value 3', column2: 'Value 4'}] (required)
    }
})(jQuery)
