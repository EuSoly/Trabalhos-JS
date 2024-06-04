let num1 = 2
let num2 = 10
const calc = "^"

function soma(v1 = 0,v2 = 0){
    return v1 + v2 ;
}
function multi(v1 = 1,v2 = 1){
    return v1 * v2
}
function sub(v1 = 0, v2 = 0){
    return v1 - v2
}
function div(v1 = 1, v2 = 1){
    return v1 / v2
}
function elv(v1 = 1, v2 = 0){
    return v1 ** v2
}


if (calc === "-"){
    console.log("Resultado da Subtração:", sub(num1,num2))
}
if (calc === "+"){
    console.log("Resultado da Soma:", soma(num1,num2))
}
if (calc === "x"){
    console.log("Resultado da Multiplicação:", multi(num1,num2))
}
if (calc === "/"){
    console.log("Resultado da Divisão:", div(num1,num2))
}
if (calc === "^"){
    console.log("Resultado de", num1, "elevado à", num2, ":", elv(num1,num2))
}
