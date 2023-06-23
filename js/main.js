document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;

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
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      // Show button
      scrollTopBtn.classList.add("show");
    } else {
      // Hide button
      scrollTopBtn.classList.remove("show");
    }
  };

  document.addEventListener("scroll", handleScroll);
});
