const firstTabButton = document.querySelector("#first-form-header-btn-first");
const secondTabButton = document.querySelector("#first-form-header-btn-second");

const firstTabContent = document.querySelector(".first-tab-content");
const secondTabContent = document.querySelector(".second-tab-content");

firstTabButton.addEventListener("click", (e) => {
    e.preventDefault();
    secondTabContent.style.display = "none";
    firstTabContent.style.display = "flex";
})
secondTabButton.addEventListener("click", (e) => {
    e.preventDefault();
    firstTabContent.style.display = "none";
    secondTabContent.style.display = "flex";
})