const mode = document.getElementById("mode");
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz4j9Z4BMYH8M9WetIuChHlAgWI8UujNSHmOVfeb165-ijJ6mZS1Gt1hdZ-SruekmP9RA/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })

    .catch((error) => console.error("Error!", error.message));
});

if (window.localStorage.getItem("theme") === "dark") {
  document.body.classList.add("mode");
  nav.classList.add("mode");
  icon.classList.remove("bi-moon-fill");
  icon.classList.add("bi-sun-fill");
}

mode.onclick = (e) => {
  document.body.classList.toggle("mode");
  nav.classList.toggle("mode");
  if (e.target.classList.contains("bi-moon-fill")) {
    e.target.classList.remove("bi-moon-fill");
    e.target.classList.add("bi-sun-fill");
  } else {
    e.target.classList.remove("bi-sun-fill");
    e.target.classList.add("bi-moon-fill");
  }

  if (document.body.classList.contains("mode")) {
    window.localStorage.setItem("theme", "dark");
  } else {
    window.localStorage.setItem("theme", "light");
  }
};
