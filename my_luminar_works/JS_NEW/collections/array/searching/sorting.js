var num=[10,2,5,3,8,4]

for(i=0;i<num.length;i++)
{
    for(j=i+1;j<num.length;j++)
    {
        if(num[i]>num[j])
            {
                var temp = num[i]
                num[i] =num[j]
                num[j]=temp
            }
    }
}
console.log(num)