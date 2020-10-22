//alert("connected")

var head_tags=document.getElementsByTagName("h1")

for(tags of head_tags)
{
    tags.style.color="red"
}

var h1_color = document.getElementById("first")
h1_color.style.color="green"

// var cls = document.getElementsByClassName("f")
var classs = document.getElementsByClassName("f")
for(cls of classs)
{
    cls.style.color="yellow"
}


var li1 = document.querySelectorAll("li")

// variablr declaration es6, var , let , const
for(let it of li1)
{
    it.style.color="green"
}

var list = document.querySelectorAll(".c")
for(let ls of list)
{
    ls.style.color="blue"
}

