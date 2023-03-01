let user1 = ['Bob', 200, 25,'Toronto'];
let userName='bob', marks = 200, age=25, city='Toronto';
let user = {
	id:1,
	name:'bob',
	marks:[20,50,40,28],
	age:25,
	married:false,
	address: {
		city:'Tornoto',
		country:"Canada",
		pincode: "xxxxxx"
	},
	hobbies:['singing','dancing','coding']
};

// user1[0]
console.log(`Student ${user.name} with id ${user.id} got ${user.marks[0]} and is interested in ${user.hobbies}`)
user.marks[4]=34;
user.phone = 1234567892;
user.gender='male';
// user.email='eaewfwaef'
console.log("user info",user.name,user.marks,user["age"],user.address.city,user.phone); //user["address"]["city"]

console.log(user);
delete user.address.pincode;
console.log(user);
// datatype objectname = {key1:value1,key2:value2,key3:value3...}

// two ways for accessing onject properties:
// 1. dot notation 
// 2. square bracket notation 

let movie = {};
movie.name="Avatar";
movie.year=2022;

console.log(movie);
console.log(Object.keys(movie).length);
// console.log(Object.values(movie))
// console.log(Object.entries(movie));
let count=0;
for(let key in user){
	console.log(key, user[key]);
	count++;
}
console.log("count",count)