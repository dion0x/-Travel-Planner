document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.offer_card1');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)';
          observer.unobserve(entry.target); // Stop observing once the animation has been triggered
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  