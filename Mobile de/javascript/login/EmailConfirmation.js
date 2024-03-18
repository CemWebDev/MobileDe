

const EmailConfirmation = () => {
  const confirmationLink = document.querySelector(".confirmation-link");
  const confirmationBox = document.querySelector(".confirmation");
  confirmationLink.addEventListener("click", (e) => {
    e.preventDefault();
    ShowConfirmation();
  });
  const ShowConfirmation = () => {
    if ((confirmationBox.style.display === "none")) {
      confirmationBox.style.display = "flex";
    } else {
      confirmationBox.style.display = "none";
    }
  };
};

EmailConfirmation();
