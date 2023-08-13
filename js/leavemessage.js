const closeBtn = document.querySelector("#close-leave-block");
const leaveBlock = document.querySelector("#leave-message-block");
const openBtn = document.querySelector("#open-leave-block");
const closeFromBg = document.querySelector("#leave-message-bg");

closeBtn.addEventListener('click' , () => {
    leaveBlock.classList.remove('show');
})
openBtn.addEventListener('click' , () => {
    leaveBlock.classList.add('show');
})
closeFromBg.addEventListener('click' , () => {
    leaveBlock.classList.remove('show');
})