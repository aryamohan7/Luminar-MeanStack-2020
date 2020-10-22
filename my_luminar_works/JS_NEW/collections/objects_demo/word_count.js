var data =" lia hello hello hi hello hello hi jai hi"
 var splits = data.split(" ")// without space("")the output is h,e,l,l,o
 var count =0
 
 console.log(splits)

 var obj={}

 for(word of splits)
 {
    if(word in obj)
    {
        obj[word]+=1
        
        
    }
    else{
        obj[word]=1
    }
 }
 console.log(obj)

 var li =[]
 
 for(key in obj)
 {
     console.log(key+","+obj[key])
     li.push(obj[key])
    
 }
 console.log(li)

 li =li.sort((a,b)=>b-a)
 var element = li[0]

 for(key in obj)
 {
     if(element==obj[key])
     {
         console.log(key)
     }
 }




