var emp={e_id:101 , e_name:"Arya" , e_salary:12000 , e_designation :"developer"}

console.log(emp)

console.log("e_gender" in emp)

emp["e_gender"]="female"
console.log(emp)

emp["e_salary"]+=10000
console.log(emp)

//print key value pair

for(key in emp)
{
    console.log(key+" , "+emp[key])
}