import models from '../db/models';

export default {
  Query: {
    getSiteById: (parent, { id }) => models.Site.findOne({ where: { id } }),
    getAllSites: () => models.Site.findAll({}),
  },

  Mutation: {
    createSite: (parent, {
      name, address, city, state, zipCode,
    }) => models.Site.create({
      name, address, city, state, zipCode,
    }),
    updateSite: (parent, {
      name, address, city, state, zipCode,
    }) => models.Site.update({
      name, address, city, state, zipCode,
    }),
    removeSite: (parent, { id }) => models.Site.destroy({ where: { id } }),
  },
};
