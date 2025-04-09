const startMessage = document.querySelector("#start-message"); // v nachale koda

if (humanBlocks.length === 0) {
  const successMessage = document.querySelector("#custom-message-error");
  successMessage.classList.add("show");
      setTimeout(() => {
          successMessage.classList.remove("show");
      }, 3000);
  return;
} else if (humanBlocks.length >= 1) {
  const successMessage = document.querySelector("#custom-message");
  successMessage.classList.add("show");
      setTimeout(() => {
          successMessage.classList.remove("show");
      }, 3000);
  return;
} // pered document.querySelectorAll(".human-block").forEach(block => block.remove());

addHumanButton.addEventListener("click", function () {
  startMessage.classList.add("hidden");
}); // v konce koda pochti





