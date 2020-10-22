class parent{
    m1()
    {
        console.log("inside parent")
    }
}

class child extends parent{
    m1(){
        console.log("first child class")
    }
}

var ch = new child()
ch.m1()