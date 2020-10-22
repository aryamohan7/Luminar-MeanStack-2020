var str = "hhhyyytttiiiaal", result=" "

var split_str=str.split("")
//console.log(split_str)
var obj={}

for(item of split_str)
{
    if(item in obj)
    {
        obj[item]+=1
    }
    else
    {
        obj[item]=1
    }
}

for(key in obj)
{ 
    var res = obj[key]+key
    result=result + res   
}

console.log(result)


