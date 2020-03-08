/**
 *  Universidad de La Laguna
 *  Escuela Superior de Ingeniería y Tecnología
 *  Grado en Ingeniería Informática
 *  Asignatura: Programación de Aplicaciones Interactivas
 *  Curso: 3º
 *  Presentación: JavaScript Debuggers
 *  Autores: Sergio Tabares Hernández
 *           Adrián Epifanio Rodríguez Hernández
 *  Correos: alu0101124896@ull.edu.es
 *           alu0101158280@ull.edu.es
 *  Fecha: 27/02/2020
 *  Contenido: Ejemplo para la visualización de las variables, elevando
 *             la base de uno en uno cada dos segundos hasta llegar al exponente.
 */

//Funcion que devuelve true si el valor indicado es par
// function isEven(num) {
//   return num % 2 == 0;
// }

// function main() {
//   let counter = '';

//   for (let i = 0; i < 10; i++) {
//     if (isEven(i)) {
//       counter += 1;
//     }
//   }
//   console.log("Hay " + counter + " numeros pares entre 0 y 10");
// }

// main();

function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}

function main() {
  console.log(numberToString(13, 10));
}

main();
