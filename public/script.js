document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const section = document.querySelector('.main');
      const scrollHeight = section.scrollHeight;

    
      section.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }, 1000);
});