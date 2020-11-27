const resolvers = {
  Query: {
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  }
};

module.exports = resolvers;
