$( document ).ready(function() {

	
	$(".fancyYoutube").click(function() {
		$.fancybox({
		'hideOnContentClick': false,
		'autoScale'         : false,
		'transitionIn'      : 'fade',
		'transitionOut'     : 'fade',
		'title'             : this.title, // optional
		//'width'           : 680, // or your size
		//'height'          : 495,
		'href'              : this.href.replace(new RegExp('youtu.be', 'i'), 'www.youtube.com/embed').replace(new RegExp('watch\\?v=([a-z0-9\_\-]+)(&|\\?)?(.*)', 'i'), 'embed/$1?version=3&$3'),
		'type'              : 'iframe',
		'iframe'            : {
			'wmode': 'transparent',
			'allowfullscreen': 'true'
			
		}
	}); // fancybox
return false;
}); // click
	
	// for our photos
	$(".fancybox").fancybox();
	

});




