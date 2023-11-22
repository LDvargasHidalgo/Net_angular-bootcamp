interface IPelicula{
    id:number;
    titulo:string;
    descripcion:string;
    anio:number;
    director:IDirector;    
}

interface IDirector{
    nombre:string;
    apellido:string;
}

const pelicula:IPelicula = {
    id:1,
    titulo:'star wars',
    anio:2021,
    descripcion:'la saga de star wars',
    director:{
        nombre:'George',
        apellido:'Lucas'
    }
}
//traer solo ciertas propiedades de mi objeto
const{ anio, director, titulo} = pelicula;
const{nombre} = director;

console.log('Pelicula:', titulo );
console.log('Año', anio);