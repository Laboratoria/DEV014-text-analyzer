import {analyzer} from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.getElementById('textArea');
const CountCharacter = document.getElementById('idCountCharacter');
const CountCharacterWithout = document.getElementById('idCountCharacterWithout');
const CountWords = document.getElementById('idCountWords');
const CountNumber = document.getElementById('idCountNumber');
const SumNumber = document.getElementById('idSumNumber');
const CountAverage = document.getElementById('idCountAverage');
textArea.addEventListener('input', (e) => {
    CountCharacter.textContent= `Caracteres: `+analyzer.getCharacterCount(textArea.value);
    CountCharacterWithout.textContent= `Caracteres sin espacios: `+analyzer.getCharacterCountExcludingSpaces(textArea.value);
    CountWords.textContent= `Palabras: `+analyzer.getWordCount(textArea.value);
    CountNumber.textContent= `Numeros: `+analyzer.getNumberCount(textArea.value);
    SumNumber.textContent= `Suma de numeros: `+analyzer.getNumberSum(textArea.value);
    CountAverage.textContent= `Promedio de palabras: `+analyzer.getAverageWordLength(textArea.value);
});
document.querySelector('button').addEventListener('click', e =>{
    refresh();
})
function refresh()
{
    CountCharacter.textContent= `Caracteres: 0`;
    CountCharacterWithout.textContent= `Caracteres sin espacios: 0`;
    CountWords.textContent= `Palabras: 0`;
    CountNumber.textContent= `Numeros: 0`;
    SumNumber.textContent= `Suma de numeros: 0`;
    CountAverage.textContent= `Promedio de palabras: 0`;
    textArea.value = '';
}
