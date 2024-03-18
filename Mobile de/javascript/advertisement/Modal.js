const CustomModal = () => {
  const modal = document.querySelector(".modal");
  const modalWrapper = document.querySelector(".modal__wrapper");
  const closeModal = document.querySelector(".close-modal");
  const openModal = document.querySelector(".open-modal");

  const Modal = () => {
    OpenModal();
    CloseModal();
  };

  const ModalVisibility = (opacity, visibility) => {
    modal.style.opacity = opacity;
    modal.style.visibility = visibility;
  };

  const OpenModal = () => {
    openModal.addEventListener("click", () => {
      ModalVisibility("1", "visible");
    });
  };

  const CloseModal = () => {
    closeModal.addEventListener("click", () => {
      ModalVisibility("0", "hidden");
    });
    window.addEventListener("click", (e) => {
      if (
        !e.composedPath().includes(openModal) &&
        !e.composedPath().includes(modalWrapper)
      ) {
        ModalVisibility("0", "hidden");
      }
    });
  };

  Modal();
};
 CustomModal();