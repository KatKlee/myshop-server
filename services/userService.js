import { getDB } from "../util/db.js"

export const userLogin = async (user) => {
    // fill object with data from response of function getDB()
    const db = await getDB()
    // find user via email from the database collection
    const result = await db.collection('user').findOne({ email: user.email })
    // return the result
    return result
}