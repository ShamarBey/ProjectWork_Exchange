const { MongoClient } = require('mongodb');
const data = require('./data.js').data;

const url = 'mongodb://localhost:27017';
const dbName = 'tc2024';

async function main() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('exchanges');

        // Удаляем старые данные (опционально)
        await collection.deleteMany({});

        // Вставляем новые данные
        const insertResult = await collection.insertMany(data);
        console.log('Inserted documents:', insertResult.insertedCount);
    } finally {
        await client.close();
    }
}

main().catch(console.error);