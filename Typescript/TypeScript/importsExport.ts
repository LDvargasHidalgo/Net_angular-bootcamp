import { idText } from "typescript";
import { IProducto, calcularTotal } from "./producto";

const listaProductos: IProducto[]=[
    {
        id:1,
        descripcion:'Tablet',
        precio:2000
    },
    {
        id:2,
        descripcion:'pc',
        precio:3000
    },
    {
        id:3,
        descripcion:'Cel',
        precio:1500
    }    
];

const totalLista = calcularTotal(listaProductos);
console.log('Valor Total =',totalLista);