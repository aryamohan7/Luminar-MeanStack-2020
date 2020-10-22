// construcor duty is initialize instance variable 
// class name = constructor in java,c++
// In js constructor keyword used for constructor

class employee{

    constructor(id,name){

        this.id=id
        this.name=name

    }

    get_emp_data()
    {
        console.log(this.id)
        console.log(this.name)
    }
}

var emp_obj = new employee(100,"arya")
//emp_obj.get_emp_data()
//emp_obj.co