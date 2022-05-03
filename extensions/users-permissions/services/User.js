module.exports = {
  fetchAuthenticatedUser(id) {
    return strapi
      .query("user", "users-permissions")
      .findOne({ id }, [
        "picture",
        "following",
        "followers",
        "saveds",
        "saveds.post",
        "saveds.post.photo",
      ]);
  },
};
