// Efeito de zoom nas imagens das menções honrosas
document.addEventListener("DOMContentLoaded", () => {
  const honraImages = document.querySelectorAll(".honra img, .card img, .icons img");

  honraImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transition = "transform 0.3s ease";
      img.style.transform = "scale(1.15)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});

console.log("Página carregada com sucesso e animações aplicadas!");


