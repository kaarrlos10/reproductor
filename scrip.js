let tipoNumero = 7
let tipoCadenaDeTexto = `hola mundo`
let tipoBooleano = false


let tipoUndefinido = undefined

let tipoObjeto = {
    name: "Karlos",
    password: "234324",
    address: {
        city:"Valencia",
        country: "Venezuela"
    }
}

let tipoLista = [
    tipoObjeto,
    tipoObjeto,
    tipoObjeto,
]

/**
 * OPERADORES
 * 
 * =         asignación
 * 
 * 
 * Operadores Lógicos
 * 
 * ==        igual que
 * !=        distinto de
 * >=        mayor o igual que
 * <=        menor o igual que
 * >         mayor que 
 * <         menor que
 * 
 * Operadores Matemáticos
 * 
 * +         sumar
 * -         restar
 * /         dividir
 * *         multiplicar
 * %         ?
 * 
 * 
 * Operadores
 * 
 * &&         and    y
 * ||         or     o
 * 
 */


if(-2 > 0){
    console.log("se cumple la condicion")
}
else{

    console.log("lo otro no se cu")
}

5 === 9
? console.log("se cumple la condicion")
: console.log("lo otro no se cumple")



let MiFuncionFlecha = 
(num1, num2, num3) => {
    return (num1 - num2) * num3
   
}
 console.log(
    MiFuncionFlecha(8,5,0)
 )