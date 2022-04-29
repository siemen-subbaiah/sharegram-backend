// "use strict";
// const { sanitizeEntity } = require("strapi-utils");

// module.exports = {
//   async update(ctx) {
//     const { id } = ctx.params;

//     let entity;

//     if (ctx.state.user.id !== parseInt(ctx.params.id)) {
//       return ctx.unauthorized(`You can't update this entry`);
//     }

//     console.log(strapi.plugins["users-permissions"].controllers);

//     if (ctx.state.user.id === parseInt(ctx.params.id)) {
//       entity = strapi.plugins["users-permissions"].controllers.user.update(ctx);
//     }

//     return sanitizeEntity(entity, { model: strapi.models.User });
//   },
// };
