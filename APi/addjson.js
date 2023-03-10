// Requiring fs module
 const fs = require("fs");
  
// Storing the JSON format data in myObject
var data = fs.readFileSync("data.json");
var myObject = JSON.parse(data);
  
// Defining new data to be added
let newData = {
  city: "England"
};
  
// Adding the new data to our object
myObject.push(newData);
  
// Writing to our JSON file
let newData2 = JSON.stringify(myObject);
fs.writeFile("data2.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});// Requiring fs module
