const {
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const SiteType = require('../type');

const {
  getAllSites,
  getSiteByID,
} = require('../resolvers');

module.exports.sites = {
  type: new GraphQLList(SiteType),
  resolve: getAllSites,
};

module.exports.site = {
  type: SiteType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getSiteByID,
};
