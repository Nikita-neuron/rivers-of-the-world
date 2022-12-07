const tooltip = document.querySelector(".tooltip");
const continents = document.querySelectorAll(".continent");

continents.forEach(continent => {
    continent.addEventListener("mousemove", e => {
        tooltip.innerHTML = continent.dataset.title;
        tooltip.style.top = (e.y + 20) + "px";
        tooltip.style.left = (e.x + 20) + "px";
    });

    continent.addEventListener("mouseenter", e => {
        tooltip.style.display = "block";
    });

    continent.addEventListener("mouseleave", e => {
        tooltip.style.display = "none";
    });
});