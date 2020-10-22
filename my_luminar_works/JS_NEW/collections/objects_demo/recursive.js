var pattern ="ABABABABC"

var splits = pattern.split("")
console.log(splits)

var obj={}

for(word of splits)
 {
    if(word in obj)
    {
        console.log(word) 
        break
    }
    else{
        obj[word]=1
    }
 }