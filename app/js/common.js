$(document).ready(function () {

/// Menu

	$('.menu-triger').click(function () {
		$('nav ul').slideToggle(500);
	});
	$(window).resize(function () {
		if ($(window).width() > 500) {
			$('nav ul').removeAttr('style');
		}
	});

/// wow animate

	var wow = new WOW(
		{
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0,          // distance to the element when triggering the animation (default is 0)
			mobile: true,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		}
	);
	wow.init();


});


/// My IE Polifil

flexibility(document.documentElement);

/// Tabs

$(function () {
	$('.tabs nav a').on('click', function () {
		show_content($(this).index());
	});

	show_content(0);

	function show_content(index) {
		// Make the content visible
		$('.tabs .content.visible').removeClass('visible');
		$('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

		// Set the tab to selected
		$('.tabs nav a.selected').removeClass('selected');
		$('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
	}
});


		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-36251023-1']);
		_gaq.push(['_setDomainName', 'jqueryscript.net']);
		_gaq.push(['_trackPageview']);
	
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
 




