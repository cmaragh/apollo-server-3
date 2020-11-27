const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    url: String!
    slug: String!
  }

  type Query {
    allLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;
