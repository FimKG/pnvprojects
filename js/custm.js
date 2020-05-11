$(document).ready(function () {
	    // Add scrollspy to <body>
	    $('body').scrollspy({ target: ".nav-scroll", offset: 50 });

	    // Add smooth scrolling on all links inside the navbar
	    $(".main-nav-collapse a").on('click', function (event) {

	        // Prevent default anchor click behavior
	        event.preventDefault();

	        // Store hash
	        var hash = this.hash;

	        // Using jQuery's animate() method to add smooth page scroll
	        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	        $('html, body').animate({
	            scrollTop: $(hash).offset().top
	        }, 800, function () {

	            // Add hash (#) to URL when done scrolling (default click behavior)
	            window.location.hash = hash;
	        });
	    });


	// function openNav() {
	// 	document.getElementById("navbar").style.width = "250px";
	// 	document.getElementById("main-nav").style.marginLeft = "250px";
	// }

	// function closeNav() {
	// 	document.getElementById("navbar").style.width = "0";
	// 	document.getElementById("main-nav").style.marginLeft = "0";
	// }

	$(".year").html(new Date().getFullYear());
});
