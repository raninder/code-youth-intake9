let a = 20, b = 5, c = 3, d='4';  //1
a = a + 5;  //1
a += 5;
c++;
b--;
console.log("a:",a,"b",b,"c",c);
console.log("b equals d",b==d);
console.log("logical and", a>5 && b>5);
console.log("logical or", a>5 || b>5);
console.log("not",!(a>10));
console.log(typeof d);

// O(1)