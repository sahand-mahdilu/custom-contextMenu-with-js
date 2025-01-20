let customMenu = document.querySelector(".contextMenu");

document.body.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  let xLocation = e.pageX;
  let yLocation = e.pageY;

  customMenu.style.display = "block";
  customMenu.style.top = `${yLocation}px`;
  customMenu.style.left = `${xLocation}px`;
});
document.body.addEventListener("click", function () {
  customMenu.style.display = "none";
});

document.body.addEventListener("keydown", function (e) {
  e.preventDefault();

  let escBtn = e.keyCode;
  if (escBtn == 27) {
    customMenu.style.display = "none";
  }
});
