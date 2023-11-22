var pelicula = {
    id: 1,
    titulo: 'star wars',
    anio: 2021,
    descripcion: 'la saga de star wars',
    director: {
        nombre: 'George',
        apellido: 'Lucas'
    }
};
//traer solo ciertas propiedades de mi objeto
var anio = pelicula.anio, director = pelicula.director, titulo = pelicula.titulo;
console.log('Pelicula:', titulo);
