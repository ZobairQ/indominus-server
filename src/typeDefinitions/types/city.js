const { gql } = require("apollo-server");

export const cityType = gql`
  type City {
    id:ID!
    user: User
    name: String
    gold: Int
    militaryPower: Int
    population: Int
  }
`;

