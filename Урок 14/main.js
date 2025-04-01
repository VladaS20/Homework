const btn = document.querySelector(".btn-open");
const modal = document.querySelector(".modal");
const body = document.body;

const openModal = () => {
  modal.classList.add("modal__visible");
  body.classList.add("body__fixed");
};
btn.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.remove("modal__visible");
  body.classList.remove("body__fixed");
};
modal.addEventListener("click", (event) => {
  const target = event.target;
  if (
    (target && target.classList.contains("modal")) ||
    target.classList.contains("modal__close-btn")
  ) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && modal.classList.contains("modal__visible")) {
    modal.classList.toggle("modal__visible");
  }
});
