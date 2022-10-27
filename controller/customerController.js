import { allCustomers } from "../services/customerService.js"

export const getAllCustomers = async () => {
    try {
        const customers = await allCustomers()
        resizeBy.status(200).json(customers)
    } catch (error) {
        res.status(500).send('getAllCustomers failed')
        console.log(error)
    }
}