"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var listaProductos = [
    {
        id: 1,
        descripcion: 'Tablet',
        precio: 2000
    },
    {
        id: 2,
        descripcion: 'pc',
        precio: 3000
    },
    {
        id: 3,
        descripcion: 'Cel',
        precio: 1500
    }
];
var totalLista = (0, producto_1.calcularTotal)(listaProductos);
console.log('Valor Total =', totalLista);
