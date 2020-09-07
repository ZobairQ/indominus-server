const path = require("path");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const resolversArray = loadFilesSync(path.join(__dirname, "./**/*Resolvers.*"));
export const resolvers = mergeResolvers(resolversArray);
