const {
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const SiteType = require('../type');

const {
  createSite,
  updateSite,
  removeSite,
} = require('../resolvers');

module.exports.siteCreate = {
  type: SiteType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString,
    },
    address: {
      name: 'address',
      type: GraphQLString,
    },
    city: {
      name: 'city',
      type: GraphQLString,
    },
    state: {
      name: 'state',
      type: GraphQLString,
    },
    zipCode: {
      name: 'zip code',
      type: GraphQLInt,
    },
  },
  resolve: createSite,
};

module.exports.siteUpdate = {
  type: SiteType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString,
    },
    address: {
      name: 'address',
      type: GraphQLString,
    },
    city: {
      name: 'city',
      type: GraphQLString,
    },
    state: {
      name: 'state',
      type: GraphQLString,
    },
    zipCode: {
      name: 'zip code',
      type: GraphQLInt,
    },
  },
  resolve: updateSite,
};

module.exports.siteRemove = {
  type: SiteType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
  },
  resolve: removeSite,
};
