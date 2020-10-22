var names=["arya","KAvya","sreedevi","ammu"]
//var splits=names.split("")


var upp = names.map(names=>names.toUpperCase())
var low = names.map(names=>names.toLowerCase())

var a_upp = names.filter(names=>names.charAt(0)=='a')

console.log(upp)
console.log(a_upp)
console.log(low)