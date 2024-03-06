export const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.split(' ').filter((word) => word !== '').length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characters = text.replace(/[.,;:!?(){}\s]/g, '');
    return characters.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const totalCharacter = text.replace(/\s/g,'').length
    const totalWords = text.split(/\s+/).length
    return parseFloat((totalCharacter/totalWords).toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // const arr = text.match(/\b\d+(\.\d+)?\b/g);
    // if(arr===null)
    // {
    //   return 0;
    // }
    // return arr.length;
    const numbers = text.split(' ').filter(word => {
      if (word.endsWith('.')) {
        word = word.slice(0, -1);
      }
      return !isNaN(word) && word.trim() !== '';
    }).length;
    if(numbers===null)
    { 
      return 0;
    }
    return numbers;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // let numerosArray = text.match(/\b\d+(\.\d+)?\b/g);
    // if(numerosArray===null)
    // {
    //   numerosArray = [];
    // }
    // let suma = 0;
    // for (let i = 0; i < numerosArray.length; i++) {
    //   suma += parseFloat(numerosArray[i]);
    // }
    // return suma;
    const numbers = text.split(' ').filter(word => {
      if (word.endsWith('.')) {
        word = word.slice(0, -1);
      }
      return !isNaN(word) && word.trim() !== '';
    })
      .map(number => parseFloat(number))
      .reduce((acc, number) => acc + number, 0);
    return numbers;
  },
};