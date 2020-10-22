var limit=50,i=1,evensum=0,oddsum=0

while(i<=limit)
{
    if(i%2==0)
    {
        evensum+=i
    }
    else
    {
        oddsum+=i
    }
    i++
}
console.log("evensum "+evensum)
console.log("oddsum "+oddsum)