const images = document.querySelectorAll(".card img");

const popup = document.createElement("div");

popup.classList.add("popup");

popup.innerHTML = `
    <span class="close">&times;</span>
    <img src="" alt="Artwork Preview">
`;

document.body.appendChild(popup);

const popupImage = popup.querySelector("img");
const closeButton = popup.querySelector(".close");


images.forEach(function(image) {

    image.addEventListener("click", function() {

        popupImage.src = image.src;

        popup.classList.add("active");

    });

});


closeButton.addEventListener("click", function() {

    popup.classList.remove("active");

});
// ===== Dark Mode =====

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});
// ===== Back To Top =====

const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ===== Contact Form =====

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received. 😊");

    contactForm.reset();

});