using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.clases
{
    public class Libro : Publicacion
    {
        //Base se utiliza para mandar al constuctor de la clase padre los parametros
        public Libro(string titulo, string autor, int paginas) :base(titulo, autor, paginas)
        {
           
        }

        //
        public override string ObtenerDescripcion(){
            return $" Libro {this.Titulo} escrito por {this.Autor} con {this.Paginas} paginas";
        }
    }
}