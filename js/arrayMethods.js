//push- insert an element at the end of an array
let arr = [10,5,20,14, 65, 32];
arr.push(22,45,333);
console.log("push:",arr);
// arr[3] = 100;
// console.log("new array", arr);

//pop- remove elements from end
let delElement = arr.pop();

console.log("pop arr", arr);
console.log("deleted element", delElement);

//unshift- insert element at beginning of array
arr.unshift(18);
console.log("unshift:",arr);

//shift- delete element from beginning
let ele = arr.shift();
console.log("shift:",arr);

//slice- select part of an array  excluding last index -slice(startindex,endindex)
// let slicedArr = arr.slice(2); //take out elements starting from index2 till end
let slicedArr = arr.slice(2,5); //take out elements from index 2 to index 4
console.log("slice", slicedArr);
console.log("original array", arr);

//splice- insert,remove,replace array elements from any position
//splice(start_index,count_to_delete,add_ele1,add_ele2..)

//splice for removing
let spliceArr = arr.splice(1,3);
console.log("splice remove", spliceArr);
console.log("original array", arr);

//splice for adding
spliceArr = arr.splice(1,0,66,77);
console.log("splice add", spliceArr);
console.log("original array", arr);

//splice for replacing
spliceArr = arr.splice(1,2,-3,-5);
console.log("original array", arr);

//recverse
let revArray = arr.reverse();
console.log("reverse", revArray);

//sort
let sortArr = arr.sort();
console.log("sort",sortArr);

let arr2 = [23,34,12,5,66,61,160,53];
// sortArr = arr2.sort(function (a,b){
// 	return b-a;
// });
sortArr = arr2.sort((a,b)=> a-b)
console.log("sort",sortArr);

let arr3 = ['red','green','blue','gray','black'];
sortArr = arr3.sort();
console.log("sort",sortArr);

for(let i=0;i<arr2.length;i++){
	arr2[i] += 2;
}
console.log("arr after adding 2", arr2);
let newArr = [];
arr2.forEach((item) => newArr.push(item += 2));
console.log("foreach", newArr);



