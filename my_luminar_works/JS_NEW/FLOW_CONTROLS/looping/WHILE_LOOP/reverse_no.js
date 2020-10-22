var num=123,rev=0

while(num!=0)
{
    rev = rev*10
    rev = rev+num%10
    num=Math.floor(num/10)

}
console.log(rev)
