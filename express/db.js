const Pool = require('pg').Pool
const pool = new Pool({
	// user: 'me',
  host: 'localhost',
  database: 'test_api',
  // password: 'password',
  port: 5432,
})

const getUsers = (req,res)=>{
	pool.query('select * from users',(error,results)=>{
	if(error)
	throw error
	res.json(results.rows)
})
}

const getUserById = (req,res)=>{
	const id = req.params.id;

	pool.query('select * from users where id = $1',[id],(error,results)=>{
	if(error)
	throw error
	res.json(results.rows)
})
}
const createUser = (req, res) => {
  // const { name, email } = req.body
	const name = req.body.uname;
	const email = req.body.email;

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added`)
  })
}

module.exports = {getUsers,getUserById,createUser}