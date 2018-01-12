
export default {
  Query: {
    getSiteById: (parent, { id }, { models }) => models.Site.findOne({ where: { id } }),
    getAllSites: (parent, args, { models }) => models.Site.findAll({}),
  },

  Mutation: {
    createSite: (parent, {
      name, location, state, description, image,
    }, { models }) => models.Site.create({
      name, location, state, description, image,
    }),
    updateSite: (parent, {
      name, location, state, description, image,
    }, { models }) => models.Site.update({
      name, location, state, description, image,
    }),
    removeSite: (parent, { id }, { models }) => models.Site.destroy({ where: { id } }),
  },
};
