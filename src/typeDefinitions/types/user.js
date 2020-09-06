const { gql } = require("apollo-server-express");

export const userType = gql`
  type User {
    id: ID!
    name: String
    username: String
    password: String
    email: String
    city: [City]
  }
`;
