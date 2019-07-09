$(document).ready(function() {
	$(function(){
		$('#number-slider').slick({
			dots: true,
      		slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,

	      }
	    }
    ]
	});
 })
})
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

//-hover for card
let cardItem = document.querySelectorAll('.product-card--service');

  for( let i = 0; i < cardItem.length; i++ ){
  	let iconBox = cardItem[i].querySelector('.product-icon');
  	// let ImgSrc = iconBox.getAttribute('data-src');
  	// let hoverImgSrc = iconBox.getAttribute('data-hover');

	cardItem[i].onmouseenter = function(){
		let ImgSrc = iconBox.getAttribute('data-src');
  		let hoverImgSrc = iconBox.getAttribute('data-hover');
	 	iconBox.setAttribute('src', hoverImgSrc );
	}
	cardItem[i].onmouseleave = function(){
		let ImgSrc = iconBox.getAttribute('data-src');
  		let hoverImgSrc = iconBox.getAttribute('data-hover');
		iconBox.setAttribute('src', ImgSrc );
	}
}
//-фикс меню
window.onscroll = function() {
	if(document.documentElement.scrollTop > 70){
		document.querySelector('#header-fixed').classList.add('active');
	}
	else{
		document.querySelector('#header-fixed').classList.remove('active');
	}

}