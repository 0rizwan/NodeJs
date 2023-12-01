const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { deflate } = require('zlib');
dotenv.config()

// EXPRESS RELATED STUFF
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded({extended: true})); //middleware

// PUG RELATED STUFF
app.set('view engine', 'pug') //setting pug as template engine
app.set('views', path.join(__dirname, 'views')) //setting views folder

// ENDPOINTS
app.get('/', (req, res) =>{
    res.status(200).render('home.pug')
})

app.get('/contact', (req, res) =>{
    res.status(200).render('contact.pug')
})

// app.get('/allDate', (req, res)=>{
//     res.status(200).render()
// })

app.post('/contact', async (req, res) =>{
    try {
        console.log(req.body)
        const {name, phone, email, address, desc} = req.body
        await User.create({
            name: name,
            phone: phone,
            email: email,
            address: address,
            desc: desc
        })
        res.redirect("/contact")

    }catch(err){
        console.log(err)
    }
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3
    },
    phone: Number,
    email: String,
    address: String,
    desc: String,
    rate: Number
})
const User = mongoose.model("register", userSchema)

const start = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        // START THE SERVER 
        app.listen(port, ()=>{
            console.log(`This server is running at http://127.0.0.1:${port}`)
        })
    }catch(err){
        console.log(err);   
    }
}

start();
