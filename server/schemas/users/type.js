const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    facebook_id: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = UserType;
