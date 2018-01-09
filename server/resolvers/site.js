import models from '../db/models';

export default {
  Query: {
    getSiteById: (parent, { id }) => models.Site.findOne({ where: { id } }),
    getAllSites: () => models.Site.findAll({}),
  },

  Mutation: {
    createSite: (parent, {
      name, address, city, state, zipCode, description,
    }, { user }) => models.Site.create({
      name, address, city, state, zipCode, description, userId: user.id,
    }),
    updateSite: (parent, {
      name, address, city, state, zipCode, description,
    }) => models.Site.update({
      name, address, city, state, zipCode, description,
    }),
    removeSite: (parent, { id }) => models.Site.destroy({ where: { id } }),
  },
};
