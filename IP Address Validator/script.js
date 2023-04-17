const form = document.querySelector('form');
const ipInput = document.querySelector('#ip');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ip = ipInput.value;
  if (validateIP(ip)) {
    result.textContent = "Valid IP address";
    result.style.color = "green";
  } else {
    result.textContent = "Invalid IP address";
    result.style.color = "red";
  }
});

function validateIP(ip) {
  const pattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  return pattern.test(ip);
}
