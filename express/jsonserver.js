// https://stackoverflow.com/questions/45237999/save-html-form-data-in-json-format-in-a-json-file-using-node-and-express-with-j

var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded());

var jsonfile = require('jsonfile');    
var file = './userdata.json'
const fs = require('fs');

app.get('/',(req,res)=>
res.render('formjson'))
    //trying to write via form to json
    app.post('/gettingdata', function(req, res) {
        var user_id = req.body.usrid;
        var token = req.body.usrphone;
        var geo = req.body.usrdata;
				// res.send(`name ${user_id}, token ${token}`)

        // // start writing
        var obj = { name: user_id , phone: token, adress: geo }
        // jsonfile.writeFileSync(file, obj, {flag: 'a'});

        // default
        res.send(user_id + ' ' + token + ' ' + geo);

				// 1. Read the existing file
fs.readFile(file, (err, data) => {
	if (err && err.code === "ENOENT") {
			// But the file might not yet exist.  If so, just write the object and bail
			return fs.writeFile(file, JSON.stringify([obj]), error => console.error);
	}
	else if (err) {
			// Some other error
			console.error(err);
	}    
	// 2. Otherwise, get its JSON content
	else {
			try {
					const fileData = JSON.parse(data);

					// 3. Append the object you want
					fileData.push(obj);

					//4. Write the file back out
					return fs.writeFile(file, JSON.stringify(fileData), error => console.error)
			} catch(exception) {
					console.error(exception);
			}
	}
});
    }); 

		app.listen(8080,()=>console.log("server running"))