$(document).ready(function () {
	"use strict";
	$(".year").html(new Date().getFullYear());

	// Smooth scroll for the navigation menu and links with .scrollto classes
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrollto = target.offset().top;
				var scrolled = 20;

				if ($('#header').length) {
					scrollto -= $('#header').outerHeight();

					if (!$('#header').hasClass('header-scrolled')) {
						scrollto += scrolled;
					}
				}

				if ($(this).attr("href") == '#home' || $(this).attr("href") == 'index.html#home') {
					scrollto = 0;
				}

				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, #mobile-nav');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 90;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active');
				}
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
			if (cur_pos < 300) {
				$(".nav-menu ul:first li:first").addClass('active');
			}
		});
	});



	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#header').addClass('header-scrolled');
			$('#top-header').addClass('top-header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
			$('#top-header').removeClass('top-header-scrolled');
		}
	});

	if ($(window).scrollTop() > 50) {
		$('#header').addClass('header-scrolled');
		$('#top-header').addClass('top-header-scrolled');
	}

	/* back-to-top */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 220) {
			$('#totop').fadeIn('slow');
		} else {
			$('#totop').fadeOut('slow');
		}
	});

	$('#totop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	//	var errors = false;
/* contact form validation */
	$('form.contact_form').on('submit', function (event) {
		event.preventDefault();
	// 	var this_type = $(this),
	// 		url = this_type.attr('action'),
	// 		type = this_type.attr('method'),
	// 		data = {};

	// 	this_type.find('[name]').each(function (index, value) {
	// 		var this_name = $(this),
	// 			name = this_name.attr('name'),
	// 			vale = this_name.val();

	// 		data[name] = vale;
	// 	});

		// console.log(data)

		// $.ajax({
		// 	url: url,
		// 	type: type,
		// 	data: data,
		// 	success: function (response) {
		// 		console.log(response);
		// 		if (response == 'OK') {
		// 			console.log("data");
		// 			// this_form.find('.loading').slideUp();
		// 			// this_form.find('.sent-message').slideDown();
		// 			// this_form.find("input:not(input[type=submit]), textarea").val('');
		// 		} else {
		// 			console.log("error");
		// 			// this_form.find('.loading').slideUp();
		// 			// this_form.find('.error-message').slideDown().html(msg);
		// 		}
		// 	}
		// });
		return false;
	});


});
