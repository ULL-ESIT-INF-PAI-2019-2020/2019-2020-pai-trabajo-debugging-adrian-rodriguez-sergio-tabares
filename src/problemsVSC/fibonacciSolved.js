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
   Contenido: Contiene ejemplo de la serie de fibonacci con un fallo
*/

/**
 * Muestra por pantalla los n primeros números de fibonacci
 *
 * @param      {number}  parameter  The parameter
 * @return     {number}  { description_of_the_return_value }
 */
function fibonacci(parameter) {
  let num_fibonacci = 1;
  let numero_anterior = 1;
  console.log("fibonacci( 1 ) = 1");
  console.log("fibonacci( 2 ) = 1");
  for(let counter = 2; counter < parameter; counter++) {
    num_fibonacci = num_fibonacci + numero_anterior;
    numero_anterior = num_fibonacci - numero_anterior;
    console.log("fibonacci(" + (counter + 1) + ") = " + num_fibonacci);
  }
  return num_fibonacci;
}

fibonacci(20);