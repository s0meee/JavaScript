let a = 1
let b = 2 
console.log(a,b) // 1,2 

//1단계  a 30 b 50
//2단계 b 50 temp 30 
//3단계 a 50 temp 30
//4단계 a 50 b 30 

//a 1 b 2
//b 2 t 1 // t =a (1)
//a 2 t 1 // a = b(2)
//a 2 b 1  // b=t(1)

let temp = a
a = b
b = temp
console.log(a,b) //  2,1 

