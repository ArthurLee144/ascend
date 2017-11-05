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
const User = new GraphQLObjectType({
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
    avatar: {type:GraphQLString},
    reviews: {
      type: new GraphQLList(Review),
      resolve(user) {
        return user.getReviews();
      }
    }
  })
});

// review type
const Review = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: {type:GraphQLString},
    rating: {type:GraphQLInt},
    title: {type:GraphQLString},
    text: {type:GraphQLString},
    date: {type:GraphQLString},
    user: {
      type: User,
      resolve(review) {
        return review.getUser()
      }
    }
  })
});

// site type
const Site = new GraphQLObjectType({
  name: 'Site',
  fields: () => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    address: {type:GraphQLString},
    city: {type:GraphQLString},
    state: {type:GraphQLString},
    zip_code: {type:GraphQLString},
    review_count: {type:GraphQLInt}
  })
});

// root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: User,
      args: {
        id: {type:GraphQLString}
      },
      resolve(parentValue, args) {
        return db.models.user.findOne({where: args});
      }
    },
    users: {
      type: new GraphQLList(User),
      resolve(parentValue, args) {
        return db.models.user.findAll({where: args});
      }
    },
    // review: {
    //   type: Review,
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
    reviews: {
      type: new GraphQLList(Review),
      resolve(parentValue, args) {
        return db.models.review.findAll({where: args});
      }
    },
    // site: {
    //   type: Site,
    //   args: {
    //     id: {type:GraphQLString}
    //   },
    //   resolve(parentValue, args) {
    //     return axios.get('http://localhost:3000/sites/' + args.id)
    //       .then(res => res.data);
    //   }
    // },
    // sites: {
    //   type: new GraphQLList(Site),
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
      type: User,
      args: {
        facebook_id: {type: GraphQLString},
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        first_name: {type: new GraphQLNonNull(GraphQLString)},
        last_name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        avatar: {type: GraphQLString},
      },
      resolve(parentValue, args) {
        //NOTE: if something is not authorized, throw error in resolve
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
        })
        .then(res => res.data);
      }
    },
    editUser: {
      type: User,
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
      },
      resolve(parentValue, args) {
        return axios.patch('http://localhost:3000/users/' + args.id, args)
        .then(res => res.data);
      }
    },
    deleteUser: {
      type: User,
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
