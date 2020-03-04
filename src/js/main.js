$(document).ready(function () {
	$(function () {
		$('#number-slider').slick({
			dots: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			speed: 950,
			infinite: true,
			autoplay: true,
			responsive: [{
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
					breakpoint: 760,
					settings: {
						slidesToShow: 2,

					}
				},
				{
					breakpoint: 425,
					settings: {
						slidesToShow: 1,

					}
				}
			]
		});

	})


	$(function () {
		$('#teamSliderMobile').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			speed: 450,
		});

	})
	$('#teamSlider').slick({
		slidesToShow: 4,
		infinite: true,
		arrows: true,
		speed: 950,
		slidesToScroll: 1,

		nextArrow: '<div class="teamSlider--arrow"><i class="fas fa-caret-right"></i></div>',
		prevArrow: '<div class="teamSlider--arrow"><i class="fas fa-caret-left"></i></i></div>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			},
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}]
	});

	$('#reviewsSlider').slick({
		dots: false,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 2,
		nextArrow: '<i class="fas fa-sort-down"></i>',
		prevArrow: '<i class="fas fa-sort-up"></i>',
		senteredMode: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	$('.our-projects-slider').slick({
		dots: true,
		slidesToShow: 1,
		nextArrow: '<span class="fas fa-arrow-left project-arr project-arr--left"></span>',
		prevArrow: '<span class="fas fa-arrow-right project-arr project-arr--right"></span>',
		responsive: [{
			breakpoint: 580,
			settings: {
				arrows: false

			}

		}]


	});

	// отправка почты
	var userPhone = $(".phone").val();
	console.log(userPhone)
	$("#send-form").on('click', function (event) {
		event.preventDefault();
		var userPhone = $(".phone").val();
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;


	});

	$(".phone").mask("+7(999)999-99-99");

});
//-клик по гамбургеру
var menuToggle = document.querySelector('.cmn-toggle-switch');
var menuMobile = document.querySelector('#header-nav');
var menuLinks = menuMobile.children;


menuToggle.onclick = function () {
	if (window.innerWidth < 992) {
		menuMobile.classList.toggle('active');
	}
}

for (var i = 0; i < menuLinks.length; i++) {

	menuLinks[i].onclick = function () {

		if (window.innerWidth < 992) {
			menuMobile.classList.toggle('active');
			menuToggle.classList.remove("active");

		};
	}
}

var toggleMenuClass = function () {
	if (window.innerWidth >= 992) {
		menuMobile.classList.remove('active');

	}
}
toggleMenuClass();

window.onresize = function (event) {

	menuMobile.classList.remove('active');
	menuToggle.classList.remove("active")
	toggleMenuClass();
}

//-hover for card
let cardItem = document.querySelectorAll('.product-card--service');

for (let i = 0; i < cardItem.length; i++) {
	let iconBox = cardItem[i].querySelector('.product-icon');
	// let ImgSrc = iconBox.getAttribute('data-src');
	// let hoverImgSrc = iconBox.getAttribute('data-hover');

	cardItem[i].onmouseenter = function () {
		let ImgSrc = iconBox.getAttribute('data-src');
		let hoverImgSrc = iconBox.getAttribute('data-hover');
		iconBox.setAttribute('src', hoverImgSrc);
	}
	cardItem[i].onmouseleave = function () {
		let ImgSrc = iconBox.getAttribute('data-src');
		let hoverImgSrc = iconBox.getAttribute('data-hover');
		iconBox.setAttribute('src', ImgSrc);
	}
}
//-фикс меню
window.onscroll = function () {
	if (document.documentElement.scrollTop > 70) {
		document.querySelector('#header-fixed').classList.add('active');
	} else {
		document.querySelector('#header-fixed').classList.remove('active');
	}

}