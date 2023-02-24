// function display(){
// 	console.log("Hi Bob");
// }
// function displayName(name){
// 	console.log(`Hello ${name}`);
// }
// function add(a,b){
// 	let c = a + b;
// 	console.log("sum is", c)
// }
//arrow functions syntax- alternative for defining functions in a concise way
// let function_name = (arg1,arg2...) => {
// 	//statements
// }

let display = () => { console.log("Alex");}
let displayName = (name) => console.log(`hi ${name}`);
display();
displayName('John');

let add = (a,b) => { return a+b; }
let sub = (a,b) => a-b; 
console.log(add(4,5));
console.log(sub(10,4));