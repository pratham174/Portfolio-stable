document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      once: true, // Ensures animation happens only once
      offset: 100, // Triggers animation 100px before element is visible
      duration: 800, // Animation duration (in milliseconds)
      easing: "ease-in-out", // Smooth transition
    });
  });
  AOS.init({
    duration: 1000, // Animation duration (in milliseconds)
    easing: 'ease-in-out', // Easing type
    once: true, // Whether animation happens only once
});