let num1 = 50
let num2 = 5
const calc = "-"


let vida = 100
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



















function completo(nome = "Seu Nome",idade = "Sua Idade"){
    console.log('nome:', nome, 'idade:', idade)
}
function danos(vida,dano){
    let total = vida - dano
    console.log("Você recebeu", dano, "de dano e ficou com", total, "de vida")
}
