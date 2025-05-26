let slideIndex = 0;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }


  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  
  slides[slideIndex].style.display = "block";
}


showSlides(slideIndex);

function toggleMenu() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}



const themeSwitch = document.getElementById('theme-switch');


const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-theme') {
        themeSwitch.checked = true;
    }
}


themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});