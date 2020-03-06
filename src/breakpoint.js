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
   Contenido: Contiene ejemplo con un breakpoint simple, se para cada vuelta del bucle
*/
//node --inspect-brk breakpoint.js

// Counts seconds and prints them on screen
function chrono() {
  let counter = 1;
    setInterval(() => {
      console.log("Counter: ", counter);
      counter++;
    }, 1000);
}

chrono();