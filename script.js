document.addEventListener("DOMContentLoaded", () => {
    fadeInElements();
});

function fadeInElements() {
    const elements = document.querySelectorAll(".container, .form-container");
    elements.forEach((el) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = "opacity 1s ease-in-out";
            el.style.opacity = 1;
        }, 200);
    });
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
