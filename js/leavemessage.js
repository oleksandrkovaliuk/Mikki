const closeBtn = document.querySelector("#close-leave-block");
const leaveBlock = document.querySelector("#leave-message-block");
const openBtn = document.querySelector("#open-leave-block");
const closeFromBg = document.querySelector("#leave-message-bg");

closeBtn.addEventListener("click", () => {
  leaveBlock.classList.remove("show");
});
openBtn.addEventListener("click", () => {
  leaveBlock.classList.add("show");
});
closeFromBg.addEventListener("click", () => {
  leaveBlock.classList.remove("show");
});

const socialBlock = document.querySelector("#social-block-show");
const automaticText = document.querySelectorAll(".automatic-text");

document.onselectionchange = () => {
  const selection = document.getSelection();

  if (selection.type === "Range") {
    const rect = selection.anchorNode.parentElement.getBoundingClientRect();
    const offsetTop = rect.y - 10;
    socialBlock.style.display = "block";
    socialBlock.style.top = `${offsetTop}px`;
  } else {
    socialBlock.style.display = "none";
  }
};

document.addEventListener("scroll", () => {
  if (socialBlock.style.display === "block") {
    socialBlock.style.display = "none";
  }
});
