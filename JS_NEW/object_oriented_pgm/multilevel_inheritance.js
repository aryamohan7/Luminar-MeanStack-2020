class parent{
    m1()
    {
        console.log("inside parent")
    }
}

class child1 extends parent{
    m2(){
        console.log("first child class")
    }
}

class child2 extends child1{

    m3()
    {
        console.log("second child class")
    }
}
var obj_child2 = new child2
obj_child2.m1()
obj_child2.m2()
obj_child2.m3()
