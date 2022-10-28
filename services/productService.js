import { ObjectId } from "mongodb"
import { getDB } from "../util/db.js"

export const saveProduct = async (product) => {
    const db = await getDB()
    const saveResult = await db.collection('products').insertOne(product)
    return saveResult
}

export const allProducts = async () => {
    const db = await getDB()
    const prodResult = await db.collection('products').find().toArray()
    console.log(prodResult)
    return prodResult
}

export const loadProduct = async (id) => {
    const db = await getDB()
    const loadResult = await db.collection('products').findOne({ _id: new ObjectId(id) })
    return loadResult
}