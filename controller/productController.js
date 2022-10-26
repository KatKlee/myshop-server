// Hier kommt alles zusammen, das ist die oberste Funktion mit try und catch
import { allProducts } from "../services/productService.js"

export const getAllProducts = async (req, res) => {
    try {
        // allProducts() function to get them all
        const products = await allProducts()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).send('GetAllProducts hat nicht geklappt')
        console.log(error)
    }
}