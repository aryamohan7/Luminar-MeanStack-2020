var num=[2,4,5] , output=[]

var total=0

for(data of num)
{
    total+=data
}
for(data of num)
{
    var element = total-data
    output.push(element)
}
console.log(output)

