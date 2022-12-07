const upButton = document.querySelector(".up-button");

upButton.addEventListener("click", e => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "flex";
    } else {
        upButton.style.display = "none";
    }
}