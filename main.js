const mode = document.getElementById("mode");
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");

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
