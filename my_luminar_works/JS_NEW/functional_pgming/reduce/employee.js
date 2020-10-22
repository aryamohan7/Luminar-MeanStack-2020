class employee{
    constructor(eid,ename,esalary,edesignation)
    {
        this.eid=eid
        this.ename=ename
        this.esalary=esalary
        this.edesignation=edesignation
    }
    get_data=()=>{
        console.log(this.eid)
        console.log(this.ename)
        console.log(this.esalary)
    }
}
var obj = new employee(111,"arya",20000,"testing")
var obj1 = new employee(112,"sarath",25000,"developer")
var obj2 = new employee(113,"ammu",2000,"datascience")

// obj.get_data()
// obj1.get_data()
// obj2.get_data()

var emp =[]
emp.push(obj)
emp.push(obj1)
emp.push(obj2)
//console.log(emp)

for(data of emp)
{
    // if(data.esalary>20000)
    // {
    //     console.log(data.ename,data.eid)
    // }
     if(data.edesignation=="developer")
    {
        console.log(data.ename)
    }
}

