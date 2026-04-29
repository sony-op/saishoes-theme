// 3D Tilt Effect for Cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card-wrapper, .product-card-wrapper, .collection-card-wrapper');

  cards.forEach(card => {
    // Add necessary 3D CSS classes dynamically
    card.classList.add('tilt-3d-card');

    const innerCard = card.querySelector('.card, .card__inner');
    if (innerCard) {
      innerCard.classList.add('tilt-3d-inner');
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element.
      const y = e.clientY - rect.top;  // y position within the element.

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
      const rotateY = ((x - centerX) / centerX) * 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
});
