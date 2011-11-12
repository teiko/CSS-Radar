$(document).ready(function() {
	$('a.fancybox').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
// END
});
(function() {
	var s = document.getElementsByTagName("script")[0], rdb = document.createElement("script");
	rdb.type = "text/javascript";
	rdb.async = true;
	rdb.src = document.location.protocol + "//www.readability.com/embed.js"; s.parentNode.insertBefore(rdb, s);
})();
(function(){
	var twitterWidgets = document.createElement('script');
	twitterWidgets.type = 'text/javascript';
	twitterWidgets.async = true;
	twitterWidgets.src = 'http://platform.twitter.com/widgets.js';
	document.getElementsByTagName('head')[0].appendChild(twitterWidgets);
})();
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
