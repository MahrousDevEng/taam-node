document.addEventListener("DOMContentLoaded", () => {
  // Trigger Lazy Load
  const lazyImages = document.querySelectorAll(".lazy");
  if (lazyImages.length !== 0) {
    const lazyLoadInstance = new LazyLoad();
  }

  // Trigger AOS
  AOS.init();
});
