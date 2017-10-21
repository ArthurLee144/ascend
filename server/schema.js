const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphyQLNonNull
} = require('graphql');

// hardcoded data
// const users = [
//   {id: '1', name: 'Rebecca Adams', email: 'radams@gmail.com', age: 16},
//   {id: '2', name: 'Robin Kim', email: 'rkim@gmail.com', age: 14},
//   {id: '3', name: 'Hailey Foster', email: 'hfoster@gmail.com', age: 12},
// ];

// user type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age: {type:GraphQLInt},
  })
});

// root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {type:GraphQLString}
      },
      resolve(parentValue, args){
        // for(let i = 0; i < users.length; i++) {
        //   if(users[i].id === args.id) {
        //     return users[i];
        //   }
        // }
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return users;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
