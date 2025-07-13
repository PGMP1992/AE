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
      document.getElementById(elementId).innerHTML = data;
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

function showInRightFrame(event, imgSrc) {
      event.preventDefault();
      document.getElementById('rightFrame').innerHTML =
        '<img src="' + imgSrc + '" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;margin:auto;">';
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


