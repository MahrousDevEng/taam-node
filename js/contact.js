document.addEventListener("DOMContentLoaded", () => {
  // Handle Contact  Form Validation
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    new Validator(
      contactForm,
      (err, res) => {
        // return res;
      },
      {
        removeSpaces: true,
      }
    );
  }
});
