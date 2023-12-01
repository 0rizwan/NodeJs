const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');
const port = 5500;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') // setting pug as template engine
app.set('views', path.join(__dirname, 'views')); // setting views folder

// ENDPOINTS
// setting endpoint for pug 
app.get('/demo', (req, res) =>{
    res.status(200).render('demo', {title: "PUG DEMO", heading: "PUG", message: "Hey its a pug demo"});
})

app.get('/', (req, res) =>{
    const para = "Node js is best for BackEnd"
    const content = {title:"Gym BackEnd",heading:"Gym Membership", paragraph:para}
    res.status(200).render('index.pug', content);
})

app.post('/', (req, res) =>{
    console.log(req.body);
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    const output = `The name of member is ${name} ${age} years old, ${gender} residing at ${address}, more about him/her ${more}`
    fs.writeFileSync('output.txt', output)
    const content = {message: "The form has been submitted"}
    res.status(200).render('index.pug', content)
})

app.get("/this", (req, res) =>{
    res.status(404).send("not found");
})

app.get("/about", (req, res) =>{
    console.log("this is about page");
});

app.post("/about", (req, res) =>{
    console.log("This is post method request at about endpoint")
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`this server is running at http://127.0.0.1:${port}`)
})
