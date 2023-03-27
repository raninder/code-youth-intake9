const express = require('express')
const app  = express()

app.use(express.static('public'))
// app.get('/',(req,res)=>
// res.send('Home')
// )

app.get('/about',(req,res)=>
res.send("<h1>About</h1>")
)

app.get('/contact',(req,res)=>
res.send("Contact us at: abc@gmail.com")
)
app.listen(8080,()=>console.log("server running"))