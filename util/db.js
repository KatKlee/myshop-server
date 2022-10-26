import { MongoClient } from "mongodb"

const URL = process.env.MONGODB_URL
const client = new MongoClient(URL)
const DB = process.env.DB_NAME

let db

export const getDB = async () => {
    if (db) return db
    // make connection with database
    const dbConnection = await client.connect()
    // fill object with data from database
    db = dbConnection.db(DB)
    // return the object
    return db
}