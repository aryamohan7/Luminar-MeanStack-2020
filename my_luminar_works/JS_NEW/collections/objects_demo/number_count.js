var num=[10,10,20,30,30,50,50]

var obj={}

for(data of num)
{
    if(data in obj)
    {
        obj[data]+=1
    }
    else
    {
        obj[data]=1
    }
}
console.log(obj)