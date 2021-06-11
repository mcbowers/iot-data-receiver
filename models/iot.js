'use strict';
const { MongoClient } = require('mongodb');
let mongo = null;

const assertConnection = async () => {
    if (mongo === null) {
        mongo = await new MongoClient('mongodb://localhost:27017/iot', { useUnifiedTopology: true, useNewUrlParser: true });
        await mongo.connect();
        console.log('Mongo client connected.');
    };
}

module.exports.read = async () => {
    try {
        await assertConnection();
        const db = mongo.db('iot');
        const response = await db.collection('data').find().toArray();
        return response;
    } catch (error) {

    }
}

module.exports.update = async (data) => {
    try {
        await assertConnection();
        const db = mongo.db('iot');
        const response = await db.collection('data').insertOne(data);
        if (response.result.ok === 1) {
            return "Data was inserted.";
        } else {
            return new Error('Data was not inserted.');
        }

    } catch (error) {
        return new Error('Error while inserting: ${error}');
    }

}