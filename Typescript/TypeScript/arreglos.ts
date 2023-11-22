let personas = ['Carlos', 'Andres'];
personas.push('Diana');
console.log(personas);


//Interfaz para dar tipado a el objeto

interface IEmpleado{
    nombre: string;
    apellido: string,
    telefonos: string[],
    sueldo:number,
    cargo?:string //? decimos que esta es opcional
}

//Objetos
const empleado: IEmpleado = {
    nombre: 'Daniel',
    apellido: 'Beltran',
    telefonos: ['3254','125'],
    sueldo:3000

}