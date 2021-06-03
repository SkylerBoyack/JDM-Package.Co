require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const cors = require("cors")


const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

const authCtrl = require('./controllers/authController')
const packageCtrl = require('./controllers/packageController')
const cartCtrl = require('./controllers/cartController')
const paymentCtrl = require('./controllers/paymentController')

const app = express()

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 *60 *60 *24}
}))


massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
})
.then(db => {
  app.set('db', db)
  console.log("Database Connected")
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
}).catch(err => console.log(err))


//Auth Ctrl
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//Package Ctrl
app.get('/api/packages', packageCtrl.getPackages)

//Cart Ctrl
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:package_id', cartCtrl.addToCart)
app.delete('/api/cart/:package_id', cartCtrl.deletePackageFromCart)
app.put('/api/cart/:package_id', cartCtrl.changeCartQty)

app.use(cors())


//Payment Ctrl
app.post('/payment', cors(), paymentCtrl.addPayment)

 