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

//includes : 아이템이 있는지 없는지 확인 
console.log(fruit.includes("apple")) //apple 있는지 확인하기
console.log(fruit.includes("pear")) //pear 있는지 확인하기

fruit.indexOf("apple")
//아이템의 인덱스를 찾아줌 
console.log(fruit.indexOf("apple")) 
//apple의 인덱스 찾아줌

//slice : 배열의 아이템을 잘라내는 역할 (시작점, 끝점 - 끝점 미포함)
//기존배열을 건드리지 않고, 새로운 배열을 만든다.
let extrafruit = fruit.slice(1,3)
console.log(extrafruit)

//splice : 배열 아이템 잘라내는 역할 (시작점, 개수)
//기존의 배열이 잘라진다.
fruit.splice(0,2)
console.log(fruit)