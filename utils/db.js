import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

const client = await MongoClient.connect(
    `${MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true }
)

console.log(client)
