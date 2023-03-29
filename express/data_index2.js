const express = require('express')
const users = require('./users')
const app  = express()


app.set("view engine", "ejs")
console.log("users",users);


app.get('/',(req,res)=>
// res.render('first',{name:'bob'})
// res.render('first',{data:users})
res.json(users)
)

app.get('/:id',(req,res)=>{
	const userid = req.params.id;
	const user = users.find((item)=>item.id==userid)

res.json(user)
})

// app.get('/:name',(req,res)=>{
// 	const username = req.params.name;
// 	const user = users.find((item)=>item.name==username)

// res.json(user)
// })
app.listen(8080,()=>console.log("server running"))