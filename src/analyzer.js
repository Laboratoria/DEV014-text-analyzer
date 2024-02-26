const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(" ");
    //no tener en cuenta el " "
    // Test comment
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] !== "") {
        count++;
      }
    }
    return count;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //contar caracteres excluyendo Espacios y signos puntuación . , ; :  ¿? ! " " - () [] /
    let countexcluding = text.replace(".", "");
    countexcluding = countexcluding.replace(" ", "");
    countexcluding = countexcluding.replace(",", "");
    countexcluding = countexcluding.replace(";", "");
    countexcluding = countexcluding.replace(":", "");
    countexcluding = countexcluding.replace("¿", "");
    countexcluding = countexcluding.replace("?", "");
    countexcluding = countexcluding.replace("!", "");
    countexcluding = countexcluding.replace('"', "");
    countexcluding = countexcluding.replace("-", "");
    countexcluding = countexcluding.replace("(", "");
    countexcluding = countexcluding.replace(")", "");
    countexcluding = countexcluding.replace("[", "");
    countexcluding = countexcluding.replace("]", "");
    countexcluding = countexcluding.replace("/", "");
    if (countexcluding.includes(".")) {
    }
    return countexcluding.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
