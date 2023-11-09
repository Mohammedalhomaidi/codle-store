

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}


function chang() {
  var sheet = document.styleSheets[0];
  sheet.insertRule(":root{--emerald:}");

  if (document.getElementById("top").style.backgroundColor == "blue") {
    document.getElementById("top").style.backgroundColor = "white";
  } else {
    document.getElementById("top").style.backgroundColor = "blue";

  }


}
