const express = require('express')
const app = express()
// const {getUsers,getUserById} = require('./db')
const db = require('./db')

app.get('/users',db.getUsers)
app.get('/users/:id',db.getUserById)
// app.post('/users',db.createUser)
app.set("view engine","ejs")
app.get('/',(req,res)=>
res.render('form'))

app.use(express.urlencoded());
app.post('/save',db.createUser);


app.listen(8080,()=>console.log("server running"))