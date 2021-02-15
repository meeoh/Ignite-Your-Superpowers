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

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyPrY9jKn-v0IydUKJXSXfXiG-XBVlKpAezpwMjpS05sa_lgq8/exec";
  const form = document.forms["submit-to-google-sheet"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = $(form.querySelector("button"));
    const inputs = $(form.querySelectorAll("input"));

    inputs.prop("disabled", true);

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        form.reset();
        button.text("Thank you!");
        inputs.prop("disabled", false);
        button.prop("disabled", false);
        setTimeout(() => {
          button.text("Join The Team");
        }, 3000);
      })
      .catch((error) => console.error("Error!", error.message));
  });
});
