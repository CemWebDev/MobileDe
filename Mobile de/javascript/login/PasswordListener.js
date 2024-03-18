const PasswordListener = () => {
  const registerPasswordInput = document.querySelector(
    ".register-password-input"
  );
  const circles = [
    {
      circle: document.querySelector("#first-circle"),
      checkIcon: document.querySelector("#first-check"),
      condition: (value) => value.length >= 8,
    },
    {
      circle: document.querySelector("#second-circle"),
      checkIcon: document.querySelector("#second-check"),
      condition: (value) => value.match(/[a-z]/i),
    },
    {
      circle: document.querySelector("#third-circle"),
      checkIcon: document.querySelector("#third-check"),
      condition: (value) => value.match(/[0-9]/),
    },
  ];
  registerPasswordInput.addEventListener("input", () => {
    let value = registerPasswordInput.value;
    circles.forEach((circleObject) => {
      if (circleObject.condition(value)) {
        circleObject.circle.style.backgroundColor = "green";
        circleObject.circle.style.border = "none";
        circleObject.checkIcon.style.opacity = "1";
      } else {
        circleObject.circle.style.backgroundColor = "";
        circleObject.circle.style.border = "";
        circleObject.checkIcon.style.opacity = "";
      }
    });
  });
};

PasswordListener();