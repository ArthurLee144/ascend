const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');
const db = require('./db/models/');

// user type
const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    facebook_id: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    reviews: {
      type: new GraphQLList(Review),
      resolve(user) {
        return user.getReviews();
      },
    },
  }),
});

// review type
const Review = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: { type: GraphQLInt },
    rating: { type: GraphQLInt },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    date: { type: GraphQLString },
    user: {
      type: User,
      resolve(review) {
        return review.getUser();
      },
    },
  }),
});

// site type
const Site = new GraphQLObjectType({
  name: 'Site',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip_code: { type: GraphQLString },
    review_count: { type: GraphQLInt },
  }),
});

// root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getUser: {
      type: User,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        return db.models.User.findOne({ where: args });
      },
    },
    allUsers: {
      type: new GraphQLList(User),
      resolve() {
        return db.models.User.findAll({});
      },
    },
    // getReview: {
    //   type: Review,
    //   args: {
    //     id: { type: GraphQLInt },
    //     userId: { type: GraphQLInt },
    //     siteId: { type: GraphQLInt },
    //   },
    //   resolve(parentValue, args) {
    //     return db.models.Review.findOne({ where: args });
    //   },
    // },
    // allReviews: {
    //   type: new GraphQLList(Review),
    //   resolve(parentValue, args) {
    //     return db.models.Review.findAll({});
    //   },
    // },
    // getSite: {
    //   type: Site,
    //   args: {
    //     id: { type: GraphQLInt },
    //   },
    //   resolve(parentValue, args) {
    //     return db.models.Site.findOne({ where: args });
    //   },
    // },
    // AllSites: {
    //   type: new GraphQLList(Site),
    //   resolve(parentValue, args) {
    //     return db.models.Site.findAll({});
    //   },
    // },
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: User,
      args: {
        facebook_id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        avatar: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        // NOTE: if something is not authorized, throw error in resolve
        return db.models.user.create({
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
      },
    },
    updateUser: {
      type: User,
      args: {
        id: { type: GraphQLInt },
        facebook_id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        avatar: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return db.models.user.update({
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
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

// Testing commit to branch 'graphql-tools'
