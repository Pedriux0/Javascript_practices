const grayHeart = document.querySelector(".gray-heart");
const redHeart = document.querySelector(".red-heart");

grayHeart.addEventListener("click", () => {
    // Remove the animation class if it's already applied
    redHeart.classList.remove("animation");
    redHeart.style.visibility = "hidden"; // Hide the red heart initially

    // Use a timeout to force reflow and restart the animation
    setTimeout(() => {
        redHeart.classList.add("animation");
        redHeart.style.visibility = "visible"; // Show the red heart with animation
    });

    grayHeart.classList.add("fill-color");
});

console.log("funciona");
