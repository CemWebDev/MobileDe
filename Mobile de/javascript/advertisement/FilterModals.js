const FilterModals = () => {
  const openModalLinks = document.querySelectorAll(".open-modal-link");
  const filterModals = document.querySelectorAll(".filter__modal");
  const closeModalLinks = document.querySelectorAll(".close-filter-modal");
  openModalLinks.forEach((openModalLink) => {
    openModalLink.addEventListener("click", () => {
      const clickedIndex = Array.from(openModalLinks).indexOf(openModalLink);
      if (
        filterModals[clickedIndex].style.visibility === "hidden" ||
        filterModals[clickedIndex].style.opacity === "0" ||
        filterModals[clickedIndex].style.opacity === "" ||
        filterModals[clickedIndex].style.visibility === ""
      ) {
        filterModals.forEach((filterModal) => {
          filterModal.style.visibility = "hidden";
          filterModal.style.opacity = "0";
        });
        filterModals[clickedIndex].style.visibility = "visible";
        filterModals[clickedIndex].style.opacity = "1";
      }
    });
  });
  closeModalLinks.forEach((closeModalLink) => {
    closeModalLink.addEventListener("click", () => {
      const clickedIndex = Array.from(closeModalLinks).indexOf(closeModalLink);
      filterModals.forEach((filterModal) => {
        filterModal.style.opacity = "0";
        filterModal.style.visibility = "hidden";
      });
    });
  });
};


FilterModals();