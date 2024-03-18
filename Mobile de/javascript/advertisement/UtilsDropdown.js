
const HeaderUtils = () => {
  const shareButton = document.querySelector(".share");
  const utilsDropdown = document.querySelector(".utils__dropdown");

  shareButton.addEventListener("click", () => {
    utilsDropdown.style.opacity = "1";
    utilsDropdown.style.visibility = "visible";
  });
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(shareButton) &&
      !e.composedPath().includes(utilsDropdown)
    ) {
      utilsDropdown.style.opacity = "0";
      utilsDropdown.style.visibility = "hidden";
    }
  });
};

 HeaderUtils();