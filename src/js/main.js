// $(document).ready(function() {


// })
//-клик по гамбургеру
var menuToggle = document.querySelector('.cmn-toggle-switch');
var menuMobile = document.querySelector('#header-nav');
var menuLinks = menuMobile.children;


menuToggle.onclick = function(){
  if( window.innerWidth < 992 ){
    menuMobile.classList.toggle('active');
  }
}

for (var i = 0; i < menuLinks.length;   i++) {

      menuLinks[i].onclick = function() {

        if( window.innerWidth < 992 ){
        menuMobile.classList.toggle('active');
        menuToggle.classList.remove("active");

      };
    }
}

var toggleMenuClass = function(){
  if( window.innerWidth >=992 ){
      menuMobile.classList.remove('active');

  }
}
 toggleMenuClass();

window.onresize = function(event) {

  menuMobile.classList.remove('active');
  menuToggle.classList.remove("active")
  toggleMenuClass();
}