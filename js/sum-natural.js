// output: 1+2+3+4+5+6+7+8+9+10=x
						

// a=1
// b=2
// c=a+b=3
let sum=0;

for(let i=1;i<=10;i++){
sum =sum + i;  // 0  + 1  =1
			// 0   + 1  = 1
			// 1   + 2   = 3
			// 3  + 3  =6
			// 6 + 4  = 10
console.log("partial sum-", sum)

}
console.log("sum:",sum);