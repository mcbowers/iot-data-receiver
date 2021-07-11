'use strict';
const { MongoClient } = require('mongodb');
const connectionString = `mongodb://${process.env.MONGO_SERVICE_HOST || 'localhost'}:27017/iot`
let mongo = null;

const assertConnection = async () => {
    if (mongo === null) {
        mongo = await new MongoClient(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });
        await mongo.connect();
    };
}

module.exports.read = async () => {
    try {
        await assertConnection();
        const db = mongo.db('iot');
        const response = await db.collection('data').find().sort({ _id: -1 }).toArray();
        return response;
    } catch (error) {
        return new Error('Error while reading: ${error}');
    }
}

module.exports.insert = async (data) => {
    try {
        await assertConnection();
        const db = mongo.db('iot');
        const response = await db.collection('data').insertOne(data);
        if (response.result.ok === 1) {
            return 'Data was inserted.';
        } else {
            return new Error('Data was not inserted.');
        }
    } catch (error) {
        return new Error(`Error while inserting: ${error}`);
    }
}