const Notifications = () => {
  const bellButton = document.querySelector(".bell-button");
  const notificationBox = document.querySelector(".notifications");
  bellButton.addEventListener("click", () => {
    notificationBox.style.opacity = "1";
    notificationBox.style.visibility = "visible";
  });
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(bellButton) &&
      !e.composedPath().includes(notificationBox)
    ) {
      notificationBox.style.opacity = "0";
      notificationBox.style.visibility = "hidden";
    }
  });
};

export default Notifications();