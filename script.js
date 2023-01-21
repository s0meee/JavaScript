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

console.log(fruit.slice(2)) 
//인덱스 2 이후의 값은 모두 잘라버리기 
//잘라진 값이 출력됨
// 0, 1, 2