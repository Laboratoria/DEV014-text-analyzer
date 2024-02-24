import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const input = document.querySelector("textarea[name='user-input']");

input.addEventListener("input", function () {
  // 1 función:Contar el numero de palabras
  const wordcount = analyzer.getWordCount(input.value);
  // tengo que acceder al ul
  const uls = document.getElementsByTagName("ul");
  // acceder a 1 li
  const firstChild = uls[0].children[0];
  //asignarle el texto al li 1
  firstChild.innerHTML = "Palabras:  " + wordcount;
  
  //2 función: Recuento de caracteres
  const countCharacter = analyzer.getCharacterCount(input.value);
  // acceder a 2 li
  const secondChild= uls[0].children[1];
  //asignarle el texto al li 2
  secondChild.innerHTML = "Caracteres:  " + countCharacter;
});
