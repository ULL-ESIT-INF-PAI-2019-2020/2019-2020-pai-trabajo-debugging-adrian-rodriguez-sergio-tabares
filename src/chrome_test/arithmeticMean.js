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
   Contenido: Contiene ejemplo del problema de la media arimetica con un fallo
*/


/**
 * Function que recibe cualquier cantidad de números enteros y devuelve la media aritmética
 * @param  int serie Cualquier cantidad de números pasados como argumentos
 */
function arithmeticMean(...serie) {
  let arithmeticSum = 0;
  let mean;
  for (let counter of serie) {
    arithmeticSum += counter;
  }
  mean = arithmeticSum / serie.length;
  console.log(mean);
}


// Librería necesaria para el performance.now();
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

let startClock = performance.now();
arithmeticMean(8, 7, 9, 8, 7, 5, 4, 7, 8, 5, 4);
let endClock = performance.now();
let time = (endClock - startClock) / 1000;
console.log("Tiempo de ejecución: " + time.toFixed(3) + " segundos");
