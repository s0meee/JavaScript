let patient = {
  name : "somi",
  age : 23,
  disease : "cold"
} 

console.log(patient)
console.log(patient.age)
console.log(patient["name"])
patient.name = "sarah"
patient["age"] = "20"
console.log(patient)

let patientList = [{name:"somee",age: 23},{name:"rabbit",age: 17},{name:"sarah",age: 17}]

console.log(patientList)
console.log("첫번째 환자는 : ",patientList[0])
console.log("첫번째 환자는 : ",patientList[0].age)
console.log("첫번째 환자는 : ",patientList[0]["age"])