import { ObjectId } from "mongodb"
import { getDB } from "../util/db.js"


export const saveCustomer = async (customer) => {
    const db = await getDB()
    const saveResult = await db.collection('customers').insertOne(customer)
    return saveResult
}

export const allCustomers = async () => {
    const db = await getDB()
    const customerResult = await db.collection('customers').find().toArray()
    return customerResult
}

export const loadCustomer = async (id) => {
    const db = await getDB()
    const loadResult = await db.collection('customers').findOne({ _id: new ObjectId(id) })
    return loadResult
}