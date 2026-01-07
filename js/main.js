const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});
