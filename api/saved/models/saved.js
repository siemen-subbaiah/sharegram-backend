"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  // DELETE SAVED!

  async delete(ctx) {
    const { id } = ctx.params;

    const [saved] = await strapi.services.saved.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!saved) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    const entity = await strapi.services.saved.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.saved });
  },
};
