'use strict';

/**
 * contact.js controller
 *
 * @description: A set of functions called "actions" of the `contact` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      status: 'ok'
    });
  },

  send: async (ctx) => {
    const { getConfig, client } = strapi.plugins.contact.services.contact;
    const { getSubject, getPlainMessage, getMessage } = strapi.plugins.contact.services.templating;
    const { body } = ctx.request;
    const config = getConfig();

    const result = client().email.send({
      to: config.to,
      from: config.from,
      replyTo: body.email,
      subject: getSubject(body.topic),
      text: getPlainMessage(body),
      html: getMessage(body),
    })

    ctx.send({
      result
    });
  },
};
