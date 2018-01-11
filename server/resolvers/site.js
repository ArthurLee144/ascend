import models from '../db/models';

export default {
  Query: {
    getSiteById: (parent, { id }) => models.Site.findOne({ where: { id } }),
    getAllSites: () => models.Site.findAll({}),
  },

  Mutation: {
    createSite: (parent, {
      name, location, state, description,
    }) => models.Site.create({
      name, location, state, description,
    }),
    updateSite: (parent, {
      name, location, state, description,
    }) => models.Site.update({
      name, location, state, description,
    }),
    removeSite: (parent, { id }) => models.Site.destroy({ where: { id } }),
  },
};
