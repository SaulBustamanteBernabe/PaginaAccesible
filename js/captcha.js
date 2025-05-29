document.addEventListener("DOMContentLoaded", () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  document.getElementById("numero1").textContent = num1;
  document.getElementById("numero2").textContent = num2;

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    const captchaInput = document.getElementById("captcha").value;
    const expected = num1 + num2;

    if (parseInt(captchaInput, 10) !== expected) {
      e.preventDefault();
      alert("La respuesta a la pregunta es incorrecta. Por favor, intenta de nuevo.");
    }
  });
});
// This script generates a simple CAPTCHA by asking the user to sum two random numbers.