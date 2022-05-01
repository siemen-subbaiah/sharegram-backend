"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {
    return strapi
      .query("post")
      .find(params, [
        "user",
        "user.picture",
        "photo",
        "likes",
        "likes.user",
        "likes.user.picture",
        "comments",
        "comments.user",
        "comments.user.picture",
      ]);
  },
};
