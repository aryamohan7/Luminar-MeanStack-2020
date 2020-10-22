var num1=10,num2=20,num3=30

if((num1>num2) & (num1<num2))
{
    console.log("num1 is second large")
}
else if((num1<num2) & (num2>num3))
{
    console.log("num2 is second large")
}
else if((num1<num3)&(num2>num3)){
    console.log("num3 is second large")
}
else if((num1==num3)&(num1==num3))
{
    console.log("num3 is large")
}