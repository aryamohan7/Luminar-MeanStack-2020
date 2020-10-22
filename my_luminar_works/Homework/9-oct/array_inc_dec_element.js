var num=[1,2,3,5,7,8,9], li=[]

for(data of num)
{
    if(data<5)
    {
        var result = data-1
        li.push(result)
    }
    else if(data>5){
        var res= data+1
        li.push(res)
    }
}
console.log(li)
