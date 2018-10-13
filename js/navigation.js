  var menu = document.querySelector('nav'),
    menulink = document.getElementById('hamburger'),
    aboutMe = document.getElementById("aboutMeNav"),
    projects = document.getElementById("projectsNav"),
    home = document.getElementById("homeNav");

  function toggleMenu() {
    menu.classList.toggle('active');
    // e.preventDefault();
    changeNav();
  };

  function changeNav() {
    if (menulink.src.includes('img/cross.svg')) {
      menulink.src = 'img/hamburger.svg';
    } else if (menulink.src.includes('img/hamburger.svg')) {
      menulink.src = 'img/cross.svg';
    }
  };

  menulink.addEventListener('click', toggleMenu);
  aboutMe.addEventListener('click', toggleMenu);
  projects.addEventListener('click', toggleMenu);
  home.addEventListener('click', toggleMenu);
