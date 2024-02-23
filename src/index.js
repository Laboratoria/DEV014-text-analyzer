import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const input = document.querySelector("textarea[name='user-input']");

input.addEventListener("input", function () {
  // Contar el numero de palabras
  const wordcount = analyzer.getWordCount(input.value);
  // tengo que acceder al ul
  const uls = document.getElementsByTagName("ul");
  // acceder a 1 li
  const firstChild = uls[0].children[0];
  //asignarle el texto al li
  firstChild.innerHTML = "Palabras:  " + wordcount;
});
