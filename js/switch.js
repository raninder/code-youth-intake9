let day=4;

// if(day==1){
// 	console.log("Monday");
// }
// else if(day==2){
// 	console.log("tuesday");
// }
// else if(day==3){
// 	console.log("Wednesday");
// }
// else if(day==4){
// 	console.log("thursday");
// }
// else if(day==5){
// 	console.log("friday");
// }
// else if(day==6){
// 	console.log("Saturday");
// }
// else{
// 	console.log("sunday");
// }

switch(op){
	case 1: text = "Monday";
					break;
	case 2: text = "tuesday";
					break;
	case 3: text = "wednesday";
					break;
	case 4: text = "thursday";
					break;
	case 5: text = "friday";
					break;
	case 6: text = "saturday";
					break;
	default: text = "tuesday";											
}
console.log("today is",text);