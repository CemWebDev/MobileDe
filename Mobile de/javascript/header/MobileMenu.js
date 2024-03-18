const Mobile = () => {
  const openMobileMenu = document.querySelector(".mobile-button");
  const closeMobileMenu = document.querySelector(".close-mobile-menu");
  const listItems = document.querySelectorAll(".navbar__list__item");
  const expansionMenus = document.querySelectorAll(".mobile-expansion-menu");
  const navbar = document.querySelector(".navbar");
  if (window.innerWidth < 660) {
    listItems.forEach((item, j) => {
      item.addEventListener("click", () => {
        if (
          expansionMenus[j].style.display === "none" ||
          expansionMenus[j].style.display === ""
        ) {
          expansionMenus.forEach((menu) => {
            menu.style.display = "none";
          });
          expansionMenus[j].style.display = "flex";
        } else {
          expansionMenus[j].style.display = "none";
        }
      });
    });
  }
  openMobileMenu.addEventListener("click", () => {
    navbar.style.right = "0";
  });
  closeMobileMenu.addEventListener("click", () => {
    navbar.style.right = "-400px";
  });
  if (window.innerWidth >= 660) {
    expansionMenus.forEach((expansion) => {
      expansion.style.display = "none";
    });
  }
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(openMobileMenu) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.style.right = "-400px";
    }
  });
};

export default Mobile();