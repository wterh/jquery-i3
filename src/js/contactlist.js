/**
 * jQuery i3-UI Contact List
 * @author WTERH
 * @version 1.0.0
 */

;(function ($) {
    'use strict'

    /**
     * ContactList constructor
     * @param {Object} element - jQuery object to create a new instance
     * @param {Object} options - user defined settings
     */
    function ContactList(element, options) {
        this.element = element
        this.options = $.extend({}, $.fn.i3ContactList.defaults, options)
        this._init()
    }

    /**
     * Plugin prototype methods
     */
    ContactList.prototype = {
        _init: function () {
            this._render()
            this._bindEvents()
        },

        _render: function () {
            const searchInput = `
        <input type="text" class="contact-list__search" placeholder="Search...">
      `
            const contactList = `
        <ul class="contact-list__items"></ul>
      `
            this.element.html(searchInput + contactList)

            this.options.contacts.forEach((contact) => {
                this._addContact(contact)
            })
        },

        _addContact: function (contact) {
            const contactItem = `
        <li class="contact-list__item">
          <span class="contact-list__name">${contact.name}</span>
          <span class="contact-list__email">${contact.email}</span>
        </li>
      `
            this.element.find('.contact-list__items').append(contactItem)
        },

        _bindEvents: function () {
            const self = this
            this.element.find('.contact-list__search').on('input', function () {
                const searchTerm = $(this).val().toLowerCase()
                self._filterContacts(searchTerm)
            })
        },

        _filterContacts: function (searchTerm) {
            this.element.find('.contact-list__item').each(function () {
                const name = $(this).find('.contact-list__name').text().toLowerCase()
                const email = $(this).find('.contact-list__email').text().toLowerCase()

                if (name.includes(searchTerm) || email.includes(searchTerm)) {
                    $(this).show()
                } else {
                    $(this).hide()
                }
            })
        },
    }

    /**
     * jQuery plugin definition
     */
    $.fn.i3ContactList = function (options) {
        return this.each(function () {
            new ContactList($(this), options)
        })
    }

    /**
     * Default plugin settings
     * @type {Object}
     */
    $.fn.i3ContactList.defaults = {
        contacts: [], // {Array} List of contacts, example: [{name: 'John Doe', email: 'john@example.com'}, {name: 'Jane Doe', email: 'jane@example.com'}] (required)
    }
})(jQuery)
