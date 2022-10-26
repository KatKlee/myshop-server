
// try and catch nur ganz oben in der Funktionenkette


export const allProducts = async () => {
    let products = []
    const db = await getDB()
    const prodResult = await db.collection('products').find().toArray()
    return prodResult
}


function Product(product) {
    this._id = product._id
    this.title = product.title
    this.articlenr = product.articlenr
    this.price = product.price
    this.instock = product.instock
}
/* prodResult.forEach(item => {
    products.push(new Product(item))
}) */