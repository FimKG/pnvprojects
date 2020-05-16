$(document).ready(function () {
	"use strict";
	$(".year").html(new Date().getFullYear());

	//	var errors = false;
	/* contact form validation */
	$('form.contact_form').on('submit', function (event) {
		event.preventDefault();
		var this_type = $(this),
			url = this_type.attr('action'),
			type = this_type.attr('method'),
			data = {};

		this_type.find('[name]').each(function (index, value) {
			var this_name = $(this),
				name = this_name.attr('name'),
				vale = this_name.val();

			data[name] = vale;
		});

		// console.log(data)

		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function (response) {
				console.log(response);
				if (response == 'OK') {
					console.log("data");
					// this_form.find('.loading').slideUp();
					// this_form.find('.sent-message').slideDown();
					// this_form.find("input:not(input[type=submit]), textarea").val('');
				} else {
					console.log("error");
					// this_form.find('.loading').slideUp();
					// this_form.find('.error-message').slideDown().html(msg);
				}
			}
		});
		return false;
	});

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

	/* scrollto */

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


});
