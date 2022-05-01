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
