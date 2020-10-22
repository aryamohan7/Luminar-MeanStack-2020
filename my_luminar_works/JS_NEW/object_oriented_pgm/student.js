class student
{
    setstudent(roll_no,name,course,total)
    {
        this.roll_no=roll_no
        this.name=name
        this.course=course
        this.total=total
    }
    getstudent()
    {
        console.log(this.roll_no)
        console.log(this.name)
        console.log(this.course)
        console.log(this.total)
    }
    
}
var obj = new student()
obj.setstudent(11,"arya","mca",12000)
obj.getstudent()