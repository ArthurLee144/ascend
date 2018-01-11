export default `
  type Site {
    id: Int!
    name: String!
    location: String!
    state: String!
    description: String!
    reviewCount: Int!
    reviews: [Review!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getSiteById(id: Int!): Site!
    getAllSites: [Site!]!
  }

  type Mutation {
    createSite(name: String!, location: String!, state: String!, description: String!): Boolean!
    updateSite(name: String!, location: String!, state: String!, description: String!): Boolean!
    removeSite(id: Int!): Boolean!
  }
`;
