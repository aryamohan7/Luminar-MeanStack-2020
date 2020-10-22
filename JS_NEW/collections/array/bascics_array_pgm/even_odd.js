var num = [10,11,12,13,14,15,16], odd=[] , even=[]

for(data of num)
{
    if(data%2==0)
    {
        
        even.push(data)
    }
    else{
        
        odd.push(data)
    }
}
console.log(even)
console.log(odd)