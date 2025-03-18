document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");

    // 🌟 Button Hover Effect
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // 🎭 Smooth Page Transition
    let links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let href = this.getAttribute("href");
            document.body.classList.remove("fade-in");
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // 🔄 File Upload Animation
    let fileInput = document.getElementById("fileInput");
    if (fileInput) {
        fileInput.addEventListener("change", function () {
            let fileName = this.files[0] ? this.files[0].name : "No file selected";
            let fileLabel = document.createElement("p");
            fileLabel.innerText = `Uploading: ${fileName}...`;
            fileLabel.style.color = "#ff758c";
            document.getElementById("uploadedFiles").appendChild(fileLabel);
        });
    }
});
