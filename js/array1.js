let score1 = [10,12,45,23,34];
let score2 = [10,13,44,14,45];
// /score[2]=score[2]+2;

let newArr = [];
for(let i=0;i<score1.length;i++){
	// score[i]
	// console.log(score[i]+2);
	newArr[i] = score1[i] + 2;
}
console.log(score1);
console.log(newArr);

a=4
b=5
c=a+b
// Ex: Add two arrays and store in a third array
let score3= [];
for(i=0;i<score1.length;i++){
	score3[i] = score1[i]+score2[i];
}
console.log("summ",score3);