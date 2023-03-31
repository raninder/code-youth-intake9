const express = require('express')
const app = express()
// const {getUsers,getUserById} = require('./db')
const db = require('./db')

app.get('/users',db.getUsers) //postman api: localhost:8080/users

app.get('/users/:id',db.getUserById) //postman api: localhost:8080/users/2

app.set("view engine","ejs")
app.get('/',(req,res)=>
res.render('form'))

app.use(express.urlencoded());
app.post('/save',db.createUser);//postman api: localhost:8080/save


app.listen(8080,()=>console.log("server running"))