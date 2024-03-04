const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const dropMenu = document.querySelector(".drop-menu");

openBtn.addEventListener("click", function () {
  dropMenu.style.transform = "translateY(0%)";
});

closeBtn.addEventListener("click", function () {
  dropMenu.style.transform = "translateY(-101%)";
});
