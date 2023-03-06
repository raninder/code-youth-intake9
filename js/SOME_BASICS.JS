// -scope- global ,local 

let a = 10;  //global scope
function display(){
	 b=20;  //local
	if(b>0){
		let c = 30; 
	}
		console.log(a,b);
}

display();
console.log(b);

{
	// let d = 40;
}
// console.log(d);

x=20;
console.log("x",x);
let x;