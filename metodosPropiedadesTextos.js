//METODOS PROPIEDADES CON TEXTOS

var texto = 'Hola, soy un texto';

// length - El número de caracteres

var numeroCaracteres = texto.length;

// toUpperCase() - Transformar todos los caracteres a mayusculas

var mayus = texto.toUpperCase();

// toLowerCase() - Transformar todos los caracteres a minuscular;

var minus = texto.toLowerCase();

//substring(0,0) - Extraer desde un punto hasta otro de caracteres

var extraido = texto.substring(0, 4);

// replace(valor1, valor2) - Reemplazar una cadena de caracteres por otra

var textoReemplazado = texto.replace('texto', 'niño');

// indexOf('o') - Buscara el primer caracter que coincida e indicara la posicion

var buscarTexto = texto.indexOf('o');

// lastIndexOf('o') - Buscara el ultimo caracter que coincida e indicara la posicion

var buscarUltimo = texto.lastIndexOf('o');

// split(' ') - Se convierte la cadena de texto en un arreglo dividiendo los elementos segun el separador indicado

var arreglo = texto.split(' ');

//----------------------------------------------