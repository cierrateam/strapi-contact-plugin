'use strict';

/**
 * templating.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */
module.exports = {
  getSubject: (topic) => {
    return `Nachricht von der Website${topic ? ` - ${topic}` : ''}`;
  },
  getPlainMessage: ({ message, name, email }) => {
    return `Nachricht von ${name} (${email}): ${message}`;
  },
  getMessage: ({ message, name, email }) => {
    return `<p>${message}</p><p>${name} (${email})</p>`;
  }
};
