document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const section = document.querySelector('.main');
      const scrollHeight = section.scrollHeight;

    
      section.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }, 1000);

    const reasonsContainer = document.querySelector('.reasonsContainer');
    reasonsContainer.style.top = '500px';
    const aboutServiceText = document.querySelector('.aboutServiceText');

    setTimeout(() => {
      reasonsContainer.style.top = '0';
      aboutServiceText.style.right = '0';
      aboutServiceText.style.opacity = '1';
    }, 2000)

    for (let i = 0; i < 2000; i++) {
      const gridBackground = document.querySelector('.gridBackground')
      const div = document.createElement("div");
      div.classList.add("item");
      gridBackground.appendChild(div)
    }
});

const reasonsBox1 = document.getElementById('reasonsBox1');
reasonsBox1.addEventListener("mouseover", () => {
  reasonsBox1.style.top = '-50px';
  reasonsBox1.style.left = '-150px';
  reasonsBox1.style.height = '110%';
  reasonsBox1.style.width = '110%';
});

reasonsBox1.addEventListener("mouseleave", () => {
  reasonsBox1.style.top = '0';
  reasonsBox1.style.left = '-100px';
  reasonsBox1.style.height = '100%';
  reasonsBox1.style.width = '100%';
});

const reasonsBox2 = document.getElementById('reasonsBox2');
reasonsBox2.addEventListener("mouseover", () => {
  reasonsBox2.style.top = '-50px';
  reasonsBox2.style.zIndex = '4';
  reasonsBox2.style.height = '110%';
  reasonsBox2.style.width = '110%';
});

reasonsBox2.addEventListener("mouseleave", () => {
  reasonsBox2.style.top = '0';
  reasonsBox2.style.zIndex = '2';
  reasonsBox2.style.height = '100%';
  reasonsBox2.style.width = '100%';
});

const reasonsBox3 = document.getElementById('reasonsBox3');
reasonsBox3.addEventListener("mouseover", () => {
  reasonsBox3.style.top = '-50px';
  reasonsBox3.style.left = '50px';
  reasonsBox3.style.zIndex = '4';
  reasonsBox3.style.height = '110%';
  reasonsBox3.style.width = '110%';
});

reasonsBox3.addEventListener("mouseleave", () => {
  reasonsBox3.style.top = '0';
  reasonsBox3.style.left = '0';
  reasonsBox3.style.zIndex = '1';
  reasonsBox3.style.height = '100%';
  reasonsBox3.style.width = '100%';
})