
//funciones flecha
const sumarArrow =(a:number, b:number): number=>{
    return a+b;
}

const  result = sumarArrow(7,15)
console.log(result);

//Indicar que algunos argumentos no son obligatorios

function multiplicar(numero1: number, base:number, numero2?:number):number{
    return numero1*base;
}

const resultado= multiplicar(10,5,2);