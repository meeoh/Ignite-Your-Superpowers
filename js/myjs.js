$(document).ready(() => {
  $(".smoothScroll").click((e) => {
    e.preventDefault();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(e.target.getAttribute("href")).offset().top,
      },
      800,
      "easeInOutExpo"
    );
  });
});
