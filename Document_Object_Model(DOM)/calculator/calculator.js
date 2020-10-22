var texts = document.querySelector("#txt")
 display=(num)=>{
    texts.value+=num
 }

 clears=()=>{
     texts.value=""
 }

 evalate=()=>
 {
     let data = eval(texts.value)
     texts.value=data
 }