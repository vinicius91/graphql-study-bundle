const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const app = require('express')();

const pg = require('pg');
const pgConfig = require('../config/pg')[nodeEnv];
const pgPool = new pg.Pool(pgConfig);

const ncSchema = require('../schema');
const graphqlHTTP = require('express-graphql');

//Execute the schema against the defined server schema

app.use('/graphql', graphqlHTTP({
    schema: ncSchema,
    graphiql: true,
    context: {
        pgPool: pgPool
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


