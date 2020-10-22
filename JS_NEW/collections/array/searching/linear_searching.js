
//Linear searching
// drawbacks :- complexcity is high
var num =[1,2,3,4,5,6]

var element =7 , flag

for(data of num)
{
    if(data==element)
    {
        flag+=1
    }
    
}
if(flag>0)
{
    console.log("found")
}
else{
    console.log("not found")
}