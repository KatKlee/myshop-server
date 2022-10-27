import { getDB } from "../util/db.js"

export const allCustomers = async () => {
    let customers = []
    const db = await getDB()
    const customerResult = await db.collection('customers').find().toArray()
    return customerResult
    // warum nur ein return und nicht in json?
}

// warum mit this?
// warum ist das neue Objekt in einer Funktion?
function Customer(customer) {
    this._id = customer._id
    this.firstname = customer.firstname
    this.lastname = customer.lastname
    this.street = customer.street
    this.housenr = customer.housenr
    this.postcode = customer.postcode
    this.city = customer.city
    this.email = customer.email
    this.password = customer.password
}

/* customerResult.forEach(item=>{
    customers.push(new Customer(item))
}) */