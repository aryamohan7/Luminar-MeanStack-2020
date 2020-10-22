class employeee
{
    constructor(eid,name,designation,join_date,resign)
    {
        this.eid=eid
        this.name=name
        this.designation=designation
        this.join_date=join_date
        this.resign=resign

    }
}
var obj1 = new employeee(100,"ajay","deveop",1981,2003)
var obj2 = new employeee(101,"vijay","deveop",1992,2008)
var obj3 = new employeee(102,"bijoy","ba",1999,2007)
var obj4 = new employeee(103,"jhon","ba",1989,2010)
var obj5 = new employeee(104,"danie","qa",2009,2014)
var obj6 = new employeee(105,"lari","qa",1987,2010)
var data_arr=[]
data_arr.push(obj1,obj2,obj3,obj4,obj5,obj6) 

var name_desig_fn=data_arr.map(obj=>obj.name+" "+obj.designation)
console.log(name_desig_fn)

var desig_develop_fn = data_arr.filter(obj=>obj.designation=="deveop")
console.log(desig_develop_fn)

var join_date_fn = data_arr.filter(obj=>obj.join_date>1980 & obj.join_date<1990)
console.log(join_date_fn)

var exp_date = data_arr.filter(obj=>obj.resign-obj.join_date>9)
console.log(exp_date)

var sort_join_fn=data_arr.map(obj=>obj.join_date).sort((ob1,ob2)=>ob1-ob2)
console.log(sort_join_fn)