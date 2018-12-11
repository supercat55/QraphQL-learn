const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const bookType = GraphQLObjectType({
  name: "book",
  field: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  field: {
    book: {
      type: bookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // 数据来源（数据库、其他来源）
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
