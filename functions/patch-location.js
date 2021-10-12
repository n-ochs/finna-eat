const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'PATCH'){
        return { statusCode: 500, body: 'Requires PATCH request.' }
    };

    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET
    });

    const data = JSON.parse(event.body);

    const ref = '312194120733950533';

    return await client.query(q.Update(q.Ref(`classes/locations/${ref}`), { data }))
        .then((response) => {
            console.log('success', response);
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        })
        .catch((error) => {
            console.log('error', error);
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        });
};