const express = require('express')
const app = express()

app.set("view engine","ejs")
app.get('/',(req,res)=>
res.render('form'))

app.use(express.urlencoded());
app.post('/save',(req,res)=>{
	const name = req.body.uname;
	const email = req.body.email;
	res.send(`name ${name}, email ${email}`)
})

app.listen(8080,()=>console.log("server running"))