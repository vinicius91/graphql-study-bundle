// Import type helpers from graphql-js
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
  } = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'MeType',

    fields: {
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        email: {type: new GraphQLNonNull(GraphQLString)},

    }
});