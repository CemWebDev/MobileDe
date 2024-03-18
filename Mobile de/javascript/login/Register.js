const Register = () => {
  const mediaButtons = document.querySelector(
    ".form__section__user__media__buttons"
  );
  const backButton = document.querySelector("#back-button");
  const registerForm = document.querySelector(
    ".form__section__user__register__form"
  );
  const signUpEmailButton = document.querySelector(".sign-up-email-button");
  const separator = document.querySelector(".separator");
  signUpEmailButton.addEventListener("click", () => {
    registerForm.style.display = "block";
    mediaButtons.style.display = "none";
    signUpEmailButton.style.display = "none";
    separator.style.display = "none";
  });
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    mediaButtons.style.display = "flex";
    signUpEmailButton.style.display = "flex";
    separator.style.display = "flex";
  });
};

Register();

