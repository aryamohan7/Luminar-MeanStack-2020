var num = [1, 2, 3, 4]

var sum = 8


for (data1 of num) {
  for(data2 of num)
  {
    var result = data1 + data2
    if(result==sum)
    {
      console.log(sum+" pair are "+data1, +data2)
    }
  }    

}





