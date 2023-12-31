document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const fixedHeader = document.querySelector("header.header-fixed");
  const headerFixedClass = "triggered";

  // Trigger Lazy Load
  const lazyImages = document.querySelectorAll(".lazy");
  if (lazyImages.length !== 0) {
    const lazyLoadInstance = new LazyLoad();
  }

  // Scroll To Top
  const scrollTopBtn = document.getElementById("scrollToTopBtn");

  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", scrollToTop);
  }

  const handleHeaderScroll = () => {
    if (fixedHeader) {
      const currentScroll = window.scrollY;
      if (currentScroll > 150) {
        !fixedHeader.classList.contains(headerFixedClass) &&
          fixedHeader.classList.add(headerFixedClass);
      } else {
        fixedHeader.classList.contains(headerFixedClass) &&
          fixedHeader.classList.remove(headerFixedClass);
      }
    }
  };
  handleHeaderScroll();

  const handleScroll = () => {
    // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
    // This can be changed - experiment
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      // Show button
      scrollTopBtn.classList.add("show");
    } else {
      // Hide button
      scrollTopBtn.classList.remove("show");
    }

    handleHeaderScroll();
  };

  document.addEventListener("scroll", handleScroll, { passive: true });

  // Handle NewsLetter Form Validation
  const newsLetterForm = document.getElementById("newsLetterForm");

  if (newsLetterForm) {
    newsLetterForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const validateHandler = new Validator(newsLetterForm, (err, res) => res, {
        removeSpaces: true,
      });

      const isValid = validateHandler.validate();

      if (isValid) {
        const email = e.currentTarget.newsLetterEmail.value;

        console.log("Email: ", email);
      }
    });
  }
});
