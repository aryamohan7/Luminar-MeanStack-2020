var sum_total = 0
class student{
    constructor(roll_no,name,total,course)
    {
        this.roll_no=roll_no
        this.name=name
        this.total=total
        this.course=course
    }

  
}
var obj1 = new student(1,"Arya",150,"BCA")
var obj2 = new student(2,"Ammu",130,"MBA")
var obj3 = new student(3,"Arathy",170,"BBA")
var obj4 = new student(4,"Sarath",180,"BCA")
var obj5 = new student(5,"Sarika",190,"BCA")

var stud = []

stud.push(obj1,obj2,obj3,obj4,obj5)

//console.log(stud)
console.log("total grater than 135 ")
for(data of stud)
{
    if(data.total>135)
    {
        
        console.log( data.roll_no , data.name)
    }
}
console.log("BCA student's name")
for(data of stud)
{
    
    if(data.course=="BCA")
    {
        
        console.log( data.roll_no , data.name)
    }
}
console.log("Sum of total in BCA student")
for(data of stud)
{
    if(data.course=="BCA")
    {
        var dt = data.total
        //console.log(dt)
        sum_total=sum_total+dt
        
    }
}
console.log(sum_total)