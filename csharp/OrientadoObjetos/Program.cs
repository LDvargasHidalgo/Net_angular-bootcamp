using OrientadoObjetos.clases;

// Creamos una instancia de la clase libro
Libro libro1 = new Libro("El señor de los anillos", "J.R.R. Tolkien", 1000);
Libro libro2 = new Libro("El hobbit", "J.R.R. Tolkien", 300);
Revista revista1 = new Revista("National Geographic", "National Geographic", 100, "$100");


System.Console.WriteLine(libro1.ObtenerDescripcion());
System.Console.WriteLine(revista1.ObtenerDescripcion());