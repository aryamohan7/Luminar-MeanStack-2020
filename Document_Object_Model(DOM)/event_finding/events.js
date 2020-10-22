var cl = document.querySelector("#one")
// addEventListener two Arg1 is event and arg2 fn
cl.addEventListener("click",()=>{
    cl.textContent="am click"
    cl.style.color="red"
})

var cl2=document.querySelector("#two")

cl2.addEventListener("dblclick",()=>
{
    cl2.textContent="double clicked"
    cl2.style.color="green"
})

var cl3 = document.querySelector("#three")
cl3.addEventListener("mouseover",()=>
{
    cl3.textContent="mouseover currently "
    cl3.style.color="pink"
})
cl3.addEventListener("mouseout",()=>
{
    cl3.style.color="yellow"
    cl3.textContent="mouse currently not over"
})
