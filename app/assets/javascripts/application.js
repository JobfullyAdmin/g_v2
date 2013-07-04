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
	$('#java_quote_1_div').on('mouseenter',function(){
		$('#java_quote_2').hide();
		$('#java_quote_3').hide();
		$('#java_quote_1').fadeIn('slow');
	});
	$('#java_quote_2_div').on('mouseenter',function(){
		$('#java_quote_1').hide();
		$('#java_quote_3').hide();
		$('#java_quote_2').fadeIn('slow');
	});
	$('#java_quote_3_div').on('mouseenter',function(){
		$('#java_quote_1').hide();
		$('#java_quote_2').hide();
		$('#java_quote_3').fadeIn('slow');
	});
	$("#java_step_1_div").hover(
	    function() {
	        $("#java_step_drop_down_1").slideToggle("fast");
	    },
	    function() {
	        $("#java_step_drop_down_1").slideToggle("fast");
	    }
	);
	$("#java_step_2_div").hover(
	    function() {
	        $("#java_step_drop_down_2").slideToggle("fast");
	    },
	    function() {
	        $("#java_step_drop_down_2").slideToggle("fast");
	    }
	);
	$("#java_step_3_div").hover(
	    function() {
	        $("#java_step_drop_down_3").slideToggle("fast");
	    },
	    function() {
	        $("#java_step_drop_down_3").slideToggle("fast");
	    }
	);
});