"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [post] = await strapi.services.post.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!post) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.post.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.post.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  // DELETE POST!

  async delete(ctx) {
    const { id } = ctx.params;

    const [post] = await strapi.services.post.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!post) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    const entity = await strapi.services.post.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
