const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const db = require('./db/config');

// user type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type:GraphQLString},
    facebook_id: {type:GraphQLString},
    username: {type:GraphQLString},
    password: {type:GraphQLString},
    first_name: {type:GraphQLString},
    last_name: {type:GraphQLString},
    email: {type:GraphQLString},
    city: {type:GraphQLString},
    state: {type:GraphQLString},
    avatar: {type:GraphQLString}
  })
});

// review type
const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: {type:GraphQLString},
    rating: {type:GraphQLInt},
    title: {type:GraphQLString},
    text: {type:GraphQLString},
    date: {type:GraphQLString},
    userId: {type:GraphQLInt},
    siteId: {type:GraphQLInt}
  })
});

// site type
const SiteType = new GraphQLObjectType({
  name: 'Site',
  fields: () => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    address: {type:GraphQLString},
    city: {type:GraphQLString},
    state: {type:GraphQLString},
    postal_code: {type:GraphQLString},
    review_count: {type:GraphQLInt}
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
      resolve(parentValue, args) {
        return db.models.user.findOne({where: args});
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return db.models.user.findAll({where: args});
      }
    }
    // review: {
    //   type: ReviewType,
    //   args: {
    //     id: {type:GraphQLString},
    //     userId: {type:GraphQLInt},
    //     siteId: {type:GraphQLInt}
    //   },
    //   resolve(parentValue, args) {
    //     return axios.get('http://localhost:3000/reviews/' + args.id)
    //       .then(res => res.data);
    //   }
    // },
    // reviews: {
    //   type: new GraphQLList(ReviewType),
    //   resolve(parentValue, args) {
    //     return axios.get('http://localhost:3000/reviews/')
    //       .then(res => res.data);
    //   }
    // },
    // site: {
    //   type: SiteType,
    //   args: {
    //     id: {type:GraphQLString}
    //   },
    //   resolve(parentValue, args) {
    //     return axios.get('http://localhost:3000/sites/' + args.id)
    //       .then(res => res.data);
    //   }
    // },
    // sites: {
    //   type: new GraphQLList(SiteType),
    //   resolve(parentValue, args) {
    //     return axios.get('http://localhost:3000/sites/')
    //       .then(res => res.data);
    //   }
    // },
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addUser: {
      type: UserType,
      args: {
        facebook_id: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        email: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        avatar: {type: GraphQLString},
        cover_photo: {type: GraphQLString},
      },
      resolve(parentValue, args) {
        return axios.post('http://localhost:3000/users/', {
          facebook_id: args.facebook_id,
          username: args.username,
          password: args.password,
          first_name: args.first_name,
          last_name: args.last_name,
          email: args.email,
          city: args.city,
          state: args.state,
          avatar: args.avatar,
          cover_photo: args.cover_photo,
        })
        .then(res => res.data);
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: {type:GraphQLString},
        facebook_id: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        email: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        avatar: {type: GraphQLString},
        cover_photo: {type: GraphQLString},
      },
      resolve(parentValue, args) {
        return axios.patch('http://localhost:3000/users/' + args.id, args)
        .then(res => res.data);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: {type: GraphQLString},
      },
      resolve(parentValue, args) {
        return axios.delete('http://localhost:3000/users/' + args.id)
        .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
