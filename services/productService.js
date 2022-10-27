import { getDB } from "../util/db.js"


export const allProducts = async () => {
    let products = []
    const db = await getDB()
    const prodResult = await db.collection('products').find().toArray()
    return prodResult
}

// woher ist der übergebene Parameter?
function Product(product) {
    this._id = product._id
    this.title = product.title
    this.brand = product.brand
    this.info = product.info
    this.articlenr = product.articlenr
    this.price = product.price
    this.instock = product.instock
    this.img = product.img
}

/* prodResult.forEach(item => {
    products.push(new Product(item))
}) */