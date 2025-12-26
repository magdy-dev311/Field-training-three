const mode = document.getElementById("mode");

mode.onclick = (e) => {
  document.body.classList.toggle("mode");
  document.getElementById("nav").classList.toggle("mode");
  if (e.target.classList.contains("bi-moon-fill")) {
    e.target.classList.remove("bi-moon-fill");
    e.target.classList.add("bi-sun-fill");
  } else {
    e.target.classList.remove("bi-sun-fill");
    e.target.classList.add("bi-moon-fill");
  }
};
