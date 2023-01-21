let fruit1 = "banana"
let fruit2 = "apple"
let fruit3 = "Strawberry"
let fruit4 = "mango"
let fruit5 = "grape"

let fruit = ["banana","apple","Strawberry","mango","grape"]

console.log(fruit)
console.log(fruit[3])


//pop() : 마지막에 있는 아이템을 뺌
fruit.pop()
console.log(fruit) //마지막에 있던 grape가 사라짐
fruit.push("pineapple")
console.log(fruit) //마지막에 pineapple이 들어감

console.log(fruit.includes("apple"))