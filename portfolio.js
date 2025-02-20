const itemScaled = document.querySelector(".main_design");

itemScaled.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 0.5s ease-in-out";
});

itemScaled.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
  this.style.transition = "transform 0.25s ease-in-out";
});
