import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const input =  document.querySelector("textarea[name='user-input']");
console.log(input) 

input.addEventListener('input', function(event) {
 analyzer.getWordCount(input.value)
});
