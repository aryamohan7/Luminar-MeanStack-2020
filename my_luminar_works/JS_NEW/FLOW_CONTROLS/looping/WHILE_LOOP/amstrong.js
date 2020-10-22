var ams=121,sum=0,temp=ams

while(temp!=0)
{
    ams=temp%10
    sum=sum+(ams*ams*ams)
    
    temp= Math.floor(temp/10) 
}

console.log(sum)

if(sum==ams)
{
    console.log("given number is amstrong")
}
else
{
    console.log("given number is not amstrong")
}

