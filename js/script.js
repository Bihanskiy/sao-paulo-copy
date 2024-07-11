document.addEventListener("DOMContentLoaded", function() {
  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });

  document.querySelector("#contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      if (phoneInput.isValidNumber()) {
        window.location.href = 'thank-you.html';
      } else {
          alert("Enter the correct phone number!");
      }
  });
});
