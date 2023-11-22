using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.clases
{
    public class Revista : Publicacion  // Herencia
    {
        public string Precio { get; set; }
        public Revista(string titulo, string autor, int paginas, string precio) : base(titulo, autor, paginas)
        {
            this.Precio = precio;
        }
        public override string ObtenerDescripcion()
        {
            return $" Revista {this.Titulo} escrito por {this.Autor} con {this.Paginas} paginas su precio es {this.Precio}";
        }
    }   
}