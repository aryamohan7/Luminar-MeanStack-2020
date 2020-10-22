var num = [10,2,17,3,4]
var low= 0 , high = num.length-1 , element=20

var sort_num=[]
var nums = num.sort((i,j)=>i-j)
sort_num.push(nums)
console.log(sort_num)

for(data of num)
{
    var sum = num[low]+num[high]

    if(sum == element)
    {
        console.log("pairs are "+num[low]+","+num[high])
        break
    }
    else
    {
        low+=1
    }
}


