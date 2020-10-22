class student{

    static get colllege_name()
    {
        var college = "luminar"
        return college
    }

    static print_clg(){
        var college="luminar"
        console.log(college)
    }

    set_data(roll_no,name){
        this.roll_no = roll_no
        this.name-name
    }

    get_data(){
        console.log(this.roll_no)
        console.log(this.name)
        student.colllege_name
    }
}
class static_class extends student{};
var obj = new student()
obj.set_data(100,"arya")
obj.get_data()
console.log(static_class.colllege_name)