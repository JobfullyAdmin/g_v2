// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require modernizr-latest
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
	$('#java_vitruvian_button').on('click',function(){
		$('#java_renaissance_description').hide();
		$('#java_davinci_description').hide();
		$('#java_vitruvian_description').fadeIn('slow');
		$('#java_vitruvian_button').text('Showing')
		$('#java_renaissance_button').text('Show Overview')
		$('#java_davinci_button').text('Show Overview')
	});
	$('#java_renaissance_button').on('click',function(){
		$('#java_vitruvian_description').hide();
		$('#java_davinci_description').hide();
		$('#java_renaissance_description').fadeIn('slow');
		$('#java_vitruvian_button').text('Show Overview')
		$('#java_renaissance_button').text('Showing')
		$('#java_davinci_button').text('Show Overview')
	});
	$('#java_davinci_button').on('click',function(){
		$('#java_vitruvian_description').hide();
		$('#java_renaissance_description').hide();
		$('#java_davinci_description').fadeIn('slow');
		$('#java_vitruvian_button').text('Show Overview')
		$('#java_renaissance_button').text('Show Overview')
		$('#java_davinci_button').text('Showing')
	});
});