const BOT_TOKEN = "7609668402:AAGWOLDkkQIAEzXqL75TjtD6vAQqaLgehM4";
const CHAT_ID = "6715819149";

function uploadFile() {
    let fileInput = document.getElementById("fileInput").files[0];
    if (fileInput.size > 1000000000) { // 1GB limit
        alert("File is too large!");
        return;
    }
    let formData = new FormData();
    formData.append("chat_id", CHAT_ID);
    formData.append("document", fileInput);
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let fileLink = `https://t.me/${BOT_TOKEN}?start=${data.result.file_id}`;
        document.getElementById("uploadedFiles").innerHTML += `<p><a href="${fileLink}" target="_blank">${fileInput.name}</a></p>`;
        saveFileLink(fileInput.name, fileLink);
    })
    .catch(error => console.error("Error:", error));
}

function saveFileLink(filename, link) {
    let user = localStorage.getItem("loggedInUser");
    let files = JSON.parse(localStorage.getItem(user + "_files")) || [];
    files.push({ name: filename, url: link });
    localStorage.setItem(user + "_files", JSON.stringify(files));
}
