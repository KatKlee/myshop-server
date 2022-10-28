// Hier kommt alles zusammen, das ist die oberste Funktion mit try und catch
import { allProducts, loadProduct, saveProduct } from "../services/productService.js"

export const addNewProduct = async (req, res) => {
    const product = req.body // Validierung erforderlich
    product.price = Number(product.price)
    const result = await saveProduct(product)
    console.log(result)
    res.status(200).json({ state: true })
}

export const getAllProducts = async (_, res) => {
    try {
        // allProducts() function to get them all
        const products = await allProducts()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).send('GetAllProducts failed')
        console.log(error)
    }
}

export const getProduct = async (req, res) => {
    const id = req.params.id

    try {
        const product = await loadProduct(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).send('getProduct failed')
        console.log(error)
    }
}