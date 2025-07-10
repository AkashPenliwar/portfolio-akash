function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Slider functionality for projects section
document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const slider = document.querySelector(".projects-slider");

  leftArrow.addEventListener("click", () => {
    slider.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

  rightArrow.addEventListener("click", () => {
    slider.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  // Letter by letter animation for name
  const animatedName = document.getElementById("animated-name");
  if (animatedName) {
    const text = animatedName.textContent;
    animatedName.textContent = "";
    let index = 0;
    let forward = true;

    function animate() {
      if (forward) {
        if (index < text.length) {
          animatedName.textContent += text.charAt(index);
          index++;
          setTimeout(animate, 150);
        } else {
          forward = false;
          setTimeout(animate, 1000);
        }
      } else {
        if (index > 0) {
          animatedName.textContent = animatedName.textContent.slice(0, -1);
          index--;
          setTimeout(animate, 100);
        } else {
          forward = true;
          setTimeout(animate, 500);
        }
      }
    }
    animate();
  }
});
