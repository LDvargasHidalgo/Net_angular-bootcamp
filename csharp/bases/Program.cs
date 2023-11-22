// See https://aka.ms/new-console-template for more information
using bases;

Console.WriteLine("Hello, World!");

double altura = 1.88;
System.Console.WriteLine($"la variable {nameof(altura)} tiene el valor de {altura}");

uint numerosNaturales = 23;
int numerosEnteros = -24;
float numeroReal = 2.3f;
decimal numeroDecimal = 0.1m;
bool boleano = true;


//Todas las variables con valor var se adapta al tipo de dato que contiene
var peso = 1.88;
System.Console.WriteLine($"Tipo de dato {peso.GetType()} ");

int? valor = null; // con el ? la variable me va a aceptar valores null


string[] nombres = new string[4];
nombres[0] = "Dani";
nombres[1] = "Dani1";
nombres[2] = "Dani2";
nombres[3] = "Dani3";
string[] apellidos = new string[]{"piedra", "Beltran"};


for (int i = 0; i < nombres.Length; i++)
System.Console.WriteLine($"{nombres[i]}");


//Crear un objeto de tipo Persona
var persona = new Persona();
persona.Id = 1;
persona.Nombres = "Laura";
persona.Apellidos ="Beltran";
System.Console.WriteLine($"Nombre: {persona.Nombres} ");

//Crear un listado de Personas
var personas = new List<Persona>();