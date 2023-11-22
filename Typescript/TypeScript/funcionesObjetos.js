var deuda = function (cliente, monto) {
    cliente.credito += monto;
};
var nuevoCliente = {
    nombres: 'Carolina',
    apellidos: 'Belrán',
    credito: 2000,
    mostrarCliente: function () {
        console.log("Credito del cliente: ".concat(this.nombres).concat(this.apellidos, " es ").concat(this.credito));
    },
    direccion: {
        numeroCalle: 325,
        nombreCalle: 'SanBernardo',
        ciudad: 'Los Angeles'
    }
};
deuda(nuevoCliente, 200);
nuevoCliente.mostrarCliente();
