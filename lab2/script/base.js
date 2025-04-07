const header = document.querySelector('header');
const slogan = document.querySelector('.slogan');


window.addEventListener('scroll', () => {
  // Перевірка, чи ширина екрану більша за 1020px
  if (window.innerWidth > 1020) {
    const sloganRect = slogan.getBoundingClientRect();
    
    // якщо хоч частина .slogan у видимій області — робимо хедер прозорим
    if (sloganRect.bottom > 0 && sloganRect.top < window.innerHeight) {
      header.classList.add('transparent');
    } else {
      header.classList.remove('transparent');
    }
  }
});

// запустимо одразу при завантаженні сторінки
window.dispatchEvent(new Event('scroll'));
