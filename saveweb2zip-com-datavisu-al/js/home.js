$(document).ready(function(){
	$('#learnMoreButton').on('click', function(ev){
		var id = $(ev.target).attr('id')
		id = '#learnMore'
		goToByScroll(id)
	})

	$('#carousel-design').carousel({
		interval: 5000,
		pause: "false"
	})

	$('#carousel-output').carousel({
		interval: 5000,
		pause: "false"
	})

	$('#carousel-quotes').carousel({
		interval: 5000
	})

	var containerHeight;
	if (window.innerHeight > 400 + 136)
		containerHeight = window.innerHeight - 100;
	else
		containerHeight = 400;
	$(".homeHeader2").css({"height": containerHeight});
	$("#home_learnmore").css({"margin-top": containerHeight - 70});

})

function goToByScroll(id){
	$('html,body').animate({
	scrollTop: $(id).offset().top - 60},'slow');
}