/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Presentación: JavaScript Debuggers
   Autores: Sergio Tabares Hernández
            Adrián Epifanio Rodríguez Hernández
   Correos: alu0101124896@ull.edu.es
            alu0101158280@ull.edu.es
   Fecha: 27/02/2020
   Contenido: Contiene ejemplo con un logpoint simple
*/

// Raises a number to his exponent
function raisedTo(base, exponent) {
  let result = 1;
  for(let counter = 1; counter <= exponent;) {
    // Log message -> {base}^{counter} = {result}
    result = result * base;
    counter++;
  }
  console.log("Result = ", result);
}

raisedTo(2, 5);