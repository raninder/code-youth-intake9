const express = require('express')
const app  = express()


app.set("view engine", "ejs")

const products = [
	{ id:1,
		title:'watch',
		price: 200
	},
	{ id:2,
		title:'watch',
		price: 200
	},
	{ id:3,
		title:'phone',
		price: 1000
	},
	{ id:4,
		title:'laptop',
		price: 1200
	},
	{ id:5,
		title:'shoes',
		price: 100
	}
]
app.get('/',(req,res)=>
res.json(products)
)
app.get('/:id',(req,res)=>{
let id = req.params.id;
let product = products.find((item)=>item.id==id)
res.json(product)
})

app.post('/', (req, res) => {
	const newProduct = {
			id: 7,
			title: 'test',
			price: 100
	}
	products.push(newProduct)
	res.redirect('/')
})
app.listen(8080,()=>console.log("server running"))