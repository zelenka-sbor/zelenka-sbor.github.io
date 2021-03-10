const $modal = document.querySelector("#orderDialog");
const $modalCloseButton = $modal.querySelector("button.delete");
const $buttonOpenModal = document.querySelector("#orderButton");

const closeDialog = (element) => {
  element.classList.toggle("is-active", 0);
  window.removeEventListener("keydown", handleModalKeyDowns);
};
const showDialog = (element) => {
  element.classList.toggle("is-active", 1);
  window.addEventListener("keydown", handleModalKeyDowns);
};

$modalCloseButton.addEventListener("click", () => closeDialog($modal));
$buttonOpenModal.addEventListener("click", () => showDialog($modal));

function handleModalKeyDowns(event) {
  console.log(`key: ${event.key} | code: ${event.code}`);

  if (event.defaultPrevented) return;

  switch (event.code) {
    case "ArrowDown":
      break;
    case "ArrowUp":
      break;
    case "Escape":
      closeDialog($modal);
      break;
  }

  event.preventDefault();
}
