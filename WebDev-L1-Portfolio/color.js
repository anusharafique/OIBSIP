const button = document.getElementById("colorBtn");
const colorCode = document.getElementById("colorCode");
button.addEventListener("click", function () {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
});