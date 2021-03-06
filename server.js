const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const userRoute = require('./routes/wishlist');
const adminRoute = require('./routes/admin');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute);


app.listen(process.env.PORT || 4060, function(){
    console.log("Server is running on Port 4060.");
})