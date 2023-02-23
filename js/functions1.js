// function declaration/definition
// function name_of_function(arg1,arg2...){
// 	//body
// }
// function call
// name_of_function(param1,param2)

let a=5;
function display(){
	console.log("Hi Bob");
}
function displayName(name){
	console.log(`Hello ${name}`);
}
function add(a,b){
	let c = a + b;
	console.log("sum is", c)
}

function displayFullname(fname,lname){
	console.log(fname+lname);
}
display();
display();
display();
displayName('alex');
displayName('john');
displayName('ash');
add(4,6);
add(25,67);
displayFullname('john','smith');