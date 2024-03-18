const FormTabs = () => {
  //! All variables
  const loginButton = document.querySelector("#header-login-button");
  const registrationButton = document.querySelector(
    "#header-registration-button"
  );
  const formSectionUserInputs = document.querySelector(
    ".form__section__user__inputs"
  );
  const formSectionUserSignUp = document.querySelector(
    ".form__section__user__signup"
  );
  const backButton = document.querySelector("#back-button");
  const registerForm = document.querySelector(
    ".form__section__user__register__form"
  );
  const mediaButtons = document.querySelector(
    ".form__section__user__media__buttons"
  );
  //! All variables

  loginButton.addEventListener("click", () => {
    loginButton.classList.add("active-header-button");
    registrationButton.classList.remove("active-header-button");
    formSectionUserInputs.style.display = "block";
    formSectionUserSignUp.style.display = "none";
    backButton.style.display = "none";
    registerForm.style.display = "none";
    if (mediaButtons.style.display === "none") {
      mediaButtons.style.display = "flex";
    }
  });
  registrationButton.addEventListener("click", () => {
    registrationButton.classList.add("active-header-button");
    loginButton.classList.remove("active-header-button");
    formSectionUserInputs.style.display = "none";
    formSectionUserSignUp.style.display = "block";
  });
};

FormTabs();
