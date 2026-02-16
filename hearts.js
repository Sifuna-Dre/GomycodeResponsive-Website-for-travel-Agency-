@"
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 28) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.opacity = (0.6 + Math.random() * 0.4);
    body.appendChild(heart);

    // Remove after animation completes
    setTimeout(() => heart.remove(), 9000);
  }

  // Spawn hearts periodically
  setInterval(createHeart, 600);
});
"@ | Out-File -FilePath .\hearts.js -Encoding utf8