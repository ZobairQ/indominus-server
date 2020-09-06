import { gql } from "apollo-server-express";

export const mutationTypeDef = gql`
  type Mutation {
    createNewUser(name:String!, username: String!, password: String!, email:String!, cityName:String!): User!
  }
`;