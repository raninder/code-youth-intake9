const express = require('express')
const app  = express()


app.set("view engine", "ejs")
app.use(express.static('public'))


const user = [
	{id:1,
	 name:'Alex'
	},
	{id:2,
		name:'Bob'
	 },
	 {id:3,
		name:'John'
	 },
	 {id:4,
		name:'Carol'
	 }
];
app.get('/',(req,res)=>
// res.render('first',{name:'bob'})
res.render('first',{data:user})
)

app.get('/user',(req,res)=>
// res.render('second')
res.redirect('https://google.com')
)

app.get('/list',(req,res)=>
res.render('second')
)
app.get('/contact',(req,res)=>
res.send("Contact us at: abc@gmail.com")
)
app.listen(8080,()=>console.log("server running"))