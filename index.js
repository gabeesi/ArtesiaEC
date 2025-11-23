// Scroll suave para todos os links que levam a uma seção da página
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ==== CARROSSEL AUTOMÁTICO + BOTÕES ==== //

document.querySelectorAll(".carrossel").forEach(carousel => {
    
    const images = carousel.querySelectorAll(".carousel-img");
    const btnLeft = carousel.querySelector(".carousel-btn.left");
    const btnRight = carousel.querySelector(".carousel-btn.right");
    
    let index = 0;

    // Função para trocar imagem
    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    // Botão direita (próxima imagem)
    btnRight.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    // Botão esquerda (imagem anterior)
    btnLeft.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    // Autoplay a cada 3s
    setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 3000);

});