//METODOS Y PROPIEDADES PARA ARREGLOS

var familia = ['Alejandro', 'Maria', 'Pedro'];
var familiaDos = ['Tomas', 'Saul'];

// length -- Devuelve la cantidad de elementos del arreglo

var cantidadElementosFamilia = familia.length;

// concat -- Permite unir arreglos

var nuevaFamilia = familia.concat(familiaDos);

// join -- Contrario a split - Mostrar todos los elementos del arreglo en una cadena de texto

var texto = familia.join(' ');

// pop -- Elimina el ultimo elemento del arreglo

familia.pop();

// push -- Agrega un elemento al final del arreglo

familia.push('Luis');

// shift -- Elimina el primer elemento al principio del arreglo

familia.shift();

// unshift -- Agregar un elemento al princio del arreglo

familia.unshift('Lucho');

// reverse -- Ordena el arreglo al reves

familia.reverse();