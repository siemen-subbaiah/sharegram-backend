"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // UPDATE COMMENT!

  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [comments] = await strapi.services.comments.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!comments) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.comments.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.comments.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.comments });
  },

  // DELETE COMMENT!

  async delete(ctx) {
    const { id } = ctx.params;

    const [comments] = await strapi.services.comments.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!comments) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    const entity = await strapi.services.comments.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.comments });
  },
};

// TEST IS-OWNER POLICY
// CREATE A POST
// TRY OUT IS-OWNER POLICY ON USER-PERMISSON!
