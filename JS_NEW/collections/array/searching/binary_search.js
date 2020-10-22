var num = [1,2,3,4,5,6,7,8]

var low = 0 , high = num.length-1 , element =10 , flag=0

while(low<=high)
{
    var mid = Math.floor((low+high)/2)
   
    if(element>num[mid])
    {
        low = mid+1      

    }
    else if(element<num[mid])
    {
        high = mid-1
        console.log("element lesser")

    }
    else if(element==num[mid])
    {
       flag=flag+1
       break

      
    }
}
if(flag!=0)
{
    console.log("found")
}
else
{
    console.log("not found")
}


// if(flag!=0)
// {
//     console.log("found")
// }
// else
// {
//     console.log("not found")
// }