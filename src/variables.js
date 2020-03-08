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
   Contenido: Contiene ejemplo para la visualización de las variables, elevando
              la base de uno en uno cada dos segundos hasta llegar al exponente.
*/

// Counts seconds and rase base each 2 seconds till reach the exponent
function chronoRaiseTo(base, exponent) {
  let counter = 1;
  let result = 1;
  let chrono = setInterval(() => {
    if((counter % 2) === 0) {
      result = result * base;
      if(counter === (exponent * 2)) {
        console.log("The result of", base, "^", exponent, "=", result);
        clearInterval(chrono);
      }
    }
    counter++;
  }, 1000);
}

chronoRaiseTo(2, 5);
