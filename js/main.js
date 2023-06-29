document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const fixedHeader = document.querySelector("header.header-fixed");
  const headerFixedClass = "triggered";

  // Trigger Lazy Load
  const lazyImages = document.querySelectorAll(".lazy");
  if (lazyImages.length !== 0) {
    const lazyLoadInstance = new LazyLoad();
  }

  // Trigger AOS
  AOS.init();

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

  document.addEventListener("scroll", handleScroll);

  // Handle NewsLetter Form Validation
  const newsLetterForm = document.getElementById("newsLetterForm");

  if (newsLetterForm) {
    new Validator(
      newsLetterForm,
      (err, res) => {
        // return res;
      },
      {
        removeSpaces: true,
      }
    );
  }
});
