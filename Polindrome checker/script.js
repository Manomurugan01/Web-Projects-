const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const word = document.querySelector('#word').value;
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    result.innerHTML = `<p>${word} is a palindrome!</p>`;
  } else {
    result.innerHTML = `<p>${word} is not a palindrome.</p>`;
  }
});
