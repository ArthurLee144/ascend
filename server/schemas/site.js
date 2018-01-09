export default `
  type Site {
    id: Int!
    name: String!
    address: String!
    city: String!
    state: String!
    zipCode: String!
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
    createSite(name: String!, address: String!, city: String!, state: String!, zipCode: String!, description: String!): Boolean!
    updateSite(name: String!, address: String!, city: String!, state: String!, zipCode: String!, description: String!): Boolean!
    removeSite(id: Int!): Boolean!
  }
`;
