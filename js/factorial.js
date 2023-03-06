//8!= 1x2x3x4x5x6x7x8
// = 8X7!=8x7x6!=56x6x5!

let num = 20;
let fact = 1;
for(let i=1;i<=num;i++){
  fact = fact * i;
}
console.log("factorial", fact);