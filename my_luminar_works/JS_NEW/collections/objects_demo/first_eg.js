var student ={roll_no:1 , name:"arya" ,course:"mean stack" }

// Display values
console.log(student)
console.log(student["name"])
console.log(student["roll_no"])
console.log(student.name)

//insert a record

student["fee"]=15000
console.log(student)

//searching a key is exist or not

console.log("gender" in student)
console.log("name" in student)

//adding values to the given datas

student["fee"]+=1000
console.log(student)
