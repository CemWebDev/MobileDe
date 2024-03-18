const SelectColor = () => {
  const colorBoxes = document.querySelectorAll(".color-box");
  const checkIcons = document.querySelectorAll(".color-box > img");

  colorBoxes.forEach((colorBox, i) => {
    colorBox.addEventListener("click", () => {
      checkIcons.forEach((icon, index) => {
        if (i === index) {
          icon.style.opacity = "1";
          icon.style.visibility = "visible";
        }
      });
    });
  });
};

SelectColor();
