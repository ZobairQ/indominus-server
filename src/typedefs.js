import { gql } from "apollo-server-express";

export const typeDefs = gql`
  """
  QUERY
  """
  type Query {
    userById(id: ID!): User!
    cityById(id: ID!): City!
    cities: [City]
    user(username: String!): User!
    city(name: String!): City!
  }
  """
  MUTATION
  """
  type Mutation {
    createNewUser(
      name: String!
      username: String!
      password: String!
      email: String!
      cityName: String!
    ): User!
    changeMilitaryPower(id: ID!, value: Int!): City!
    changeGold(id: ID!, value: Int!): City!
    changePopluation(id: ID!, value: Int!): City!
    incrementGoldMineLevel(id: ID!): City!
    incrementHouseLevel(id: ID!): City!
    incrementMilitaryBaseLevel(id: ID!): City!
  }

  """
  THE TYPES
  """
  
  type User {
    id: ID!
    name: String
    username: String
    password: String
    email: String
    city: [City]
  }

  type City {
    id: ID!
    user: User
    name: String
    gold: Int
    militaryPower: Int
    population: Int
    goldMineLevel: Int
    houseLevel: Int
    militaryBaseLevel: Int
  }
`;
