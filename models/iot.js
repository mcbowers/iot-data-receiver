'use strict';
const { MongoClient } = require('mongodb');
let mongo = null;

const assertConnection = async () => {
    if (mongo === null) {
        mongo = await new MongoClient('mongodb://localhost:27017/iot', { useUnifiedTopology: true, useNewUrlParser: true });
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
            return "Data was inserted.";
        } else {
            return new Error('Data was not inserted.');
        }
    } catch (error) {
        return new Error('Error while inserting: ${error}');
    }
}