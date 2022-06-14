require('dotenv').config();
require('express-async-errors');
const stripeConroller = require('./controllers/stripeController')
const express = require('express');
const app = express();

// controller

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(express.static('./public'));

app.post('/stripe',stripeConroller)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;



app.listen(3000,()=>{
  console.log(`the app is running on port number ${port}`)
})
