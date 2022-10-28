import { allCustomers, saveCustomer, loadCustomer } from "../services/customerService.js"

export const addNewCustomer = async (req, res) => {
    const customer = req.body // Validierung erforderlich
    const result = await saveCustomer(customer)
    console.log(result)
    res.status(200).json({ state: true })
}


export const getAllCustomers = async (_, res) => {
    try {
        const customers = await allCustomers()
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).send('getAllCustomers failed')
        console.log(error)
    }
}

export const getCustomer = async (req, res) => {
    const id = req.params.id

    try {
        const customer = await loadCustomer(id)
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).send('getCustomer failed')
        console.log(error)
    }
}