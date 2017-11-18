export default `
  type Review {
    id: Int!
    rating: Int!
    title: String!
    text: String!
    user: User!
    site: Site!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getReviewById(id: Int!): Review!
    getAllReviews: [Review!]!
  }

  type Mutation {
    createReview(rating: Int!, title: String!, text: String!): Boolean!
    updateReview(rating: Int!, title: String!, text: String!): Boolean!
    removeReview(id: Int!): Boolean!
  }
`;
