class student{
    constructor(no,name,course,total)
    {
        this.no=no
        this.name=name
        this.course=course
        this.total=total
    }
    get_data=()=>

    {

    }
}
var obj1 = new student(1,"ammu","mba",160)
var obj2 = new student(2,"arya","bca",150)
var obj3 = new student(3,"arathy","bca",120)
var obj4 = new student(4,"sarath","bca",150)
var obj5 = new student(5,"asha","bsc",110)

var array_data=[]
array_data.push(obj1,obj2,obj3,obj4,obj5)

var stud_filter = array_data.filter(obj=>obj.total>130)

for(st of array_data)
{
    console.log(st.name)
}

var stud_filter = array_data.filter(obj=>obj.course=="bca")
console.log(stud_filter)

// var total_sum = stud_filter.map(obj=>obj.total.reduce(obj1,obj2=>obj1+obj2))
// console.log(total_sum)

//heighest mark student
var max_total=array_data.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(max_total)

// max total student information
var stud_data = array_data.filter(obj=>obj.total==max_total)
console.log(stud_data)

//lowest total
var lowest_total=array_data.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj2:obj1)
console.log("minimum total "+lowest_total)

//student data lowest

var stud_data =array_data.filter(obj=>obj.total==lowest_total)
console.log(stud_data)

// name sort order

var sort_total =array_data.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2)
console.log(sort_total)