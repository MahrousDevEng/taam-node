document.addEventListener("DOMContentLoaded", () => {
  const imgChartEl = document.getElementById("imgChart");
  const btnZoomIn = document.getElementById("zoomInBtn");
  const btnZoomOut = document.getElementById("zoomOutBtn");

  if (imgChartEl) {
    const myZoom = WZoom.create(imgChartEl, {
      minScale: 1,
      maxScale: 5,
      dragscrollable: false,
      zoomOnClick: false,
      disableWheelZoom: true,
    });

    if (btnZoomIn) {
      btnZoomIn.addEventListener("click", (e) => {
        e.preventDefault();

        myZoom.zoomUp();
      });
    }
    if (btnZoomOut) {
      btnZoomOut.addEventListener("click", (e) => {
        e.preventDefault();

        myZoom.zoomDown();
      });
    }
  }
});
