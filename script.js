<script>
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in');

  const onScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // Gọi ngay khi tải trang
});
</script>
document.addEventListener("DOMContentLoaded", function () {
    const numberOfPetals = 20;
    for (let i = 0; i < numberOfPetals; i++) {
        let petal = document.createElement("div");
        petal.className = "petal";
        document.body.appendChild(petal);

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = 5 + Math.random() * 5 + "s";
        petal.style.opacity = Math.random();
        petal.style.fontSize = Math.random() * 10 + 10 + "px";
    }
});

