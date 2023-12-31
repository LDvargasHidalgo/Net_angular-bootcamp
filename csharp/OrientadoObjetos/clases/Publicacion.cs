using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.clases
{
    public class Publicacion
    {
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public int Paginas { get; set; }

        public Publicacion(string titulo, string autor, int paginas)
        {
            this.Titulo = titulo;
            this.Autor = autor;
            this.Paginas = paginas;
        }

        //"virtual" Cambie el comportamiento dependiendo la clase que lo invoque
        public virtual string ObtenerDescripcion()
        {
            return $"{this.Titulo} escrito por {this.Autor}";
        }

    }
}