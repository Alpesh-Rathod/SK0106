
$(document).ready(function() {
	$('.video-inner a').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	setInterval(function() { makeTimer(); }, 1000);
});
    