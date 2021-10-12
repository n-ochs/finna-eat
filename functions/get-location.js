const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET'){
        return { statusCode: 500, body: 'Requires GET request.' }
    };

    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET
    });

    const ref = '312194120733950533';

    return await client.query(q.Get(q.Ref(`classes/locations/${ref}`)))
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            };
        });
};
