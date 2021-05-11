'use strict';

/**
 * contact.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

const { contact } = require('../config/contact');

module.exports = {
  getConfig: () => {
    return contact;
  },
  client: () => {
    return strapi.plugins.email.services;
  },
};
