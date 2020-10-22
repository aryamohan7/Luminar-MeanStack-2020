var num1=10,num2=0

try{
 if(num2==0) throw "division by zero"
    var res =  num1/num2
    console.log("Result: "+res)// output is Nan ;ie:- exception occur
}catch(err)
{
    console.log("division by zero")
}
