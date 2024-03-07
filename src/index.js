import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const input = document.querySelector("textarea[name='user-input']"); //al Dom
const inputFunction =  function () {
  // 1 Función:Contar el numero de palabras
  const wordcount = analyzer.getWordCount(input.value);
  // tengo que acceder al ul
  const uls = document.getElementsByTagName("ul");
  // acceder a 1 li
  const firstChild = uls[0].children[0];
  //asignarle el texto al li 1
  firstChild.innerHTML = "Palabras:  " + wordcount;

  //2 Función: Recuento de caracteres
  const countCharacter = analyzer.getCharacterCount(input.value);
  // acceder a 2 li
  const secondChild = uls[0].children[1];
  //asignarle el texto al li 2
  secondChild.innerHTML = "Caracteres:  " + countCharacter;

  // 3 Función: Recuento de caracteres excluyendo espacios y signos de puntuación:
  const countCharacterwtout = analyzer.getCharacterCountExcludingSpaces(
    input.value
  );
  // tengo que acceder a li 3
  const thirdChild = uls[0].children[2]; //withoutSpaceCaracter para el nombre del child
  //asignarle el texto al li 3
  thirdChild.innerHTML = "Caracteres sin espacios:  " + countCharacterwtout;

  //4 Función: Recuento de números:
  const countNumbers = analyzer.getNumberCount(input.value);
  // tengo que acceder a li 4
  const fourthChild = uls[0].children[3];
  //asignarle el texto al li 4
  fourthChild.innerHTML = "Números:    " + countNumbers;

  //5 función Suma total de números:
  const sumNumber = analyzer.getNumberSum(input.value);
  // tengo que acceder a li 5
  const fifthChild = uls[0].children[4];
  //asignarle el texto al li 5
  fifthChild.innerHTML = "Suma de números:   " + sumNumber;

  //6 función Longitud media de las palabras:
  const lengthWord = analyzer.getAverageWordLength(input.value);
  // tengo que acceder a li 6
  const sixthChild = uls[0].children[5];
  //asignarle el texto al li 6
  sixthChild.innerHTML = "Longitud promedio palabra: " + lengthWord;
}
input.addEventListener("input",inputFunction); //inputFunction la logica que va a realizar // tipo de evento del teclado

const button = document.getElementById("reset-button"); //todo lo que haga con el click

button.addEventListener("click", function () { 
  //Borrar lo que este en el input
  input.value="";
  inputFunction()
});
