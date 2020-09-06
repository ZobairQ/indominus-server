import { gql } from "apollo-server-express";

export const queryTypeDef = gql`
  type Query {
    users: [User],
    userById(id:ID!):User!
    cities: [City],
    user(username:String!):User!,
    city(name:String!):City!
  }
`;