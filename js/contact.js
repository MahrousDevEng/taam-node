document.addEventListener("DOMContentLoaded", () => {
  // Handle Contact  Form Validation
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const validateHandler = new Validator(contactForm, (err, res) => err, {
        removeSpaces: true,
      });

      const isValid = validateHandler.validate();

      if (isValid) {
        console.log("first");
      }
    });
  }
});
