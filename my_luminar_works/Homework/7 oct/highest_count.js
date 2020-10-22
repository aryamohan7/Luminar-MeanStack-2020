var data = ["arya","sarath","arya","sarath","sarath","asha"]

var obj={}

for(items of data)
{
    if(items in obj)
    {
        obj[items]+=1
    }
    else
    {
        obj[items]=1
    }
} 

console.log(obj)

// var li=[]
// for(key in obj)
// {
//     li.push(obj[key])
// }
// console.log(li)

// var sorting = li.sort((i,j)=>j-i)
// console.log(sorting)

// for(key in obj)
// {
//     if(sorting==obj[key])
//     {
        
//     }
// }