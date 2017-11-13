const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const SiteType = new GraphQLObjectType({
  name: 'site',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    reviewCount: { type: GraphQLInt },
  }),
});

module.exports = SiteType;
