  var menu = document.querySelector('nav'),
    menulink = document.getElementById('hamburger'),
    aboutMe = document.getElementById("aboutMeNav"),
    projects = document.getElementById("projectsNav"),
    home = document.getElementById("homeNav");
  function toggleMenu() {
    menu.classList.toggle('active');
    // e.preventDefault();
  };

  aboutMe.addEventListener('click', toggleMenu);
  menulink.addEventListener('click', toggleMenu);
  projects.addEventListener('click', toggleMenu);
  home.addEventListener('click', toggleMenu);
