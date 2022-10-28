import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { login } from './controller/userController.js'
import { encrypt } from './middleware/encryptMiddleware.js'
import { createToken } from './util/token.js'
import { verifyBearer } from './controller/authController.js'
import { checkTokenMiddleware } from './middleware/verifyMiddleware.js'
import { addNewCustomer, getAllCustomers, getCustomer } from './controller/customerController.js'
import { addNewProduct, getAllProducts, getProduct } from './controller/productController.js'


// set up development port
const PORT = process.env.PORT
// to start a new express application
const app = express()

// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ limit: '10mb' }))

// All my Routes
app.get('/', (req, res) => {
    res.status(200).send('Alles OKAY')
})

app.post('/api/login', encrypt, login) // check login and encrypt password
app.post('/', createToken)
app.get('/api/verify', verifyBearer)

app.get('/api/users', checkTokenMiddleware/* ,getAllUsers  */)

app.get('/api/customers', checkTokenMiddleware, getAllCustomers)
app.get('/api/customers/:id', checkTokenMiddleware, getCustomer)
app.post('/api/customers', checkTokenMiddleware, addNewCustomer)

app.get('/api/products', checkTokenMiddleware, getAllProducts)
app.get('/api/products', checkTokenMiddleware, getProduct)
app.post('/api/products', checkTokenMiddleware, addNewProduct)

app.get('/api/orders', checkTokenMiddleware /* , getAllOrders */)


// start the server
app.listen(PORT, () => console.log('Server runs on Port:', PORT))