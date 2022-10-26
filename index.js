import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { login } from './controller/userController.js'
import { encrypt } from './middleware/encryptMiddleware.js'
import { checkToken, createToken } from './util/token.js'
import { verifyBearer } from './controller/authController.js'
import { checkTokenMiddleware } from './middleware/verifyMiddleware.js'


// set up development port
const PORT = process.env.PORT
// to start a new express application
const app = express()

// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// All my Routes
app.get('/', (req, res) => {
    res.status(200).send('Alles OKAY')
})

app.get('/api/dashboard', checkTokenMiddleware/* ,getAllUsers ,getAllProducts, getAllOrders */)
app.post('/api/dashboard', checkTokenMiddleware/* , addNewProducts */)
app.post('/api/login', encrypt, login) // check login and encrypt password
app.post('/', createToken)
app.get('/api/verify', verifyBearer)


// start the server
app.listen(PORT, () => console.log('Server runs on Port:', PORT))