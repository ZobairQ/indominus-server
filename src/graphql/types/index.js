const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");

const typesArray = loadFilesSync(path.join(__dirname, "."), {
  recursive: true,
});
export const typeDefs = mergeTypeDefs(typesArray, { all: true });
