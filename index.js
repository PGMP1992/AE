/* index.html  
Navigation bar*/
function openNav() {
    document.getElementById("mySidenav").style.width = "max-width";
}

/* index.html 
   Navigation bar*/  
function closeNav() {
    document.getElementById("mySidenav").style.width = "max-width";
  }

/* index.html 
Opens page in content */
function load_page(page, elementId) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      const target = document.getElementById(elementId);
      target.innerHTML = data;
      initPhotoCarousel();
    })
    .catch(error => console.error('Error loading page:', error));
}

// Load the home page by default
document.addEventListener("DOMContentLoaded", function() {
  load_page("home.html", "content");
});

/* Work.htm  
onclick shows selected tab */ 
function openTab(evt, tabName) {
  document.querySelectorAll('.tabcontent').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tablinks').forEach(el => el.classList.remove('active'));
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

  // Work.htm  
  //Get the element with id="defaultOpen" above and click on it */ 
function clickTab() {    
    document.getElementById("defaultOpen").click();
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  } let slideIndex = 0;
  showSlides();
}

// Switch themes dark-light mode
document.addEventListener('DOMContentLoaded', function() {
  const themeIcon = document.getElementById('theme-icon');
  
  themeIcon.addEventListener('click', function() {
      document.body.classList.toggle('white-theme');
      if (document.body.classList.contains('white-theme')) {
          themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
      } else {
          themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
      }
  });
});


// Carousel --------------------------------
let photoCarouselItems = [];
let currentPhotoIndex = 0;

function initPhotoCarousel() {
  const gallery = document.querySelector('.photo-gallery');
  const imageEl = document.getElementById('carouselImage');

  if (!gallery || !imageEl) {
    photoCarouselItems = [];
    currentPhotoIndex = 0;
    return;
  }

  photoCarouselItems = Array.from(gallery.querySelectorAll('a')).map((link, index) => {
    const thumb = link.querySelector('img');
    link.dataset.index = index;

    return {
      src: link.href,
      alt: thumb?.getAttribute('alt') || 'Selected photo',
      title: thumb?.getAttribute('title') || thumb?.getAttribute('alt') || ''
    };
  });

  const currentSrc = imageEl.currentSrc || imageEl.src;
  const activeIndex = photoCarouselItems.findIndex(item => item.src === currentSrc);
  updatePhotoCarousel(activeIndex >= 0 ? activeIndex : 0);
}

function updatePhotoCarousel(index) {
  if (!photoCarouselItems.length) {
    return;
  }

  currentPhotoIndex = (index + photoCarouselItems.length) % photoCarouselItems.length;
  const selectedItem = photoCarouselItems[currentPhotoIndex];
  const imageEl = document.getElementById('carouselImage');
  const captionEl = document.getElementById('carouselCaption');

  if (imageEl) {
    imageEl.src = selectedItem.src;
    imageEl.alt = selectedItem.alt;
    imageEl.title = selectedItem.title;
  }

  if (captionEl) {
    captionEl.textContent = selectedItem.title || selectedItem.alt;
  }

  document.querySelectorAll('.photo-gallery a').forEach((link, linkIndex) => {
    link.classList.toggle('active-thumb', linkIndex === currentPhotoIndex);
    link.setAttribute('aria-current', linkIndex === currentPhotoIndex ? 'true' : 'false');
  });
}

function movePhotoCarousel(step) {
  if (!photoCarouselItems.length) {
    initPhotoCarousel();
  }

  updatePhotoCarousel(currentPhotoIndex + step);
}

function showInRightFrame(event, imgSrc) {
      event.preventDefault();

      if (!photoCarouselItems.length) {
        initPhotoCarousel();
      }

      const selectedIndex = photoCarouselItems.findIndex(item => item.src === imgSrc);
      if (selectedIndex >= 0) {
        updatePhotoCarousel(selectedIndex);
        return;
      }

      const imageEl = document.getElementById('carouselImage');
      if (imageEl) {
        imageEl.src = imgSrc;
      }
    }


function loadInArticle(event, url) {
      event.preventDefault();
      const article = document.getElementById('article');
      // If it's an image, show it as an <img>
      if (url.match(/\.(jpg|jpeg|png|gif)$/i)) {
        article.innerHTML = '<img src="' + url + '" style="max-width:100%;max-height:70vh;display:block;margin:auto;">';
      } else {
        fetch(url)
          .then(response => response.text())
          .then(html => {
            article.innerHTML = html;
          })
          .catch(() => {
            article.innerHTML = "<p>Could not load page.</p>";
          });
      }
    }
    
    // MP3 player
    function playMp3(src) {
        document.getElementById('mp3-player').innerHTML =
          '<audio controls autoplay style="width:90%;max-width:400px;"><source src="' + src + '" type="audio/mpeg">Seu navegador não suporta áudio.</audio>';
      }

