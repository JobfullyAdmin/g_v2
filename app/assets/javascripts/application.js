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
	$('#myCarousel').carousel({
	  interval: 4000
	})
	$('#quoteCarousel1').carousel({
	  interval: 4000
	})
	$('#quoteCarousel2').carousel({
	  interval: 6000
	})
	$('#java_vitruvian_box').on('mouseenter',function(){
		$('#java_renaissance_description').slideUp();
		$('#java_davinci_description').slideUp();
		$('#java_vitruvian_description').slideDown('slow');
		$('#java_renaissance_box').css('background-color','white');
		$('#java_davinci_box').css('background-color','white');
		$('#java_vitruvian_box').css('background-color','#800000');
		$('#java_renaissance_box').css('opacity','0.5');
		$('#java_davinci_box').css('opacity','0.5');
		$('#java_vitruvian_box').css('opacity','1');
		$('#java_vitruvian_button').text('Showing')
		$('#java_renaissance_button').text('Show Overview')
		$('#java_davinci_button').text('Show Overview')
	});
	$('#java_renaissance_box').on('mouseenter',function(){
		$('#java_vitruvian_description').slideUp();
		$('#java_davinci_description').slideUp();
		$('#java_renaissance_description').slideDown('slow');
		$('#java_renaissance_box').css('background-color','#800000');
		$('#java_davinci_box').css('background-color','white');
		$('#java_vitruvian_box').css('background-color','white');
		$('#java_renaissance_box').css('opacity','1');
		$('#java_davinci_box').css('opacity','0.5');
		$('#java_vitruvian_box').css('opacity','0.5');
		$('#java_vitruvian_button').text('Show Overview')
		$('#java_renaissance_button').text('Showing')
		$('#java_davinci_button').text('Show Overview')
	});
	$('#java_davinci_box').on('mouseenter',function(){
		$('#java_vitruvian_description').slideUp();
		$('#java_renaissance_description').slideUp();
		$('#java_davinci_description').slideDown('slow');
		$('#java_renaissance_box').css('background-color','white');
		$('#java_davinci_box').css('background-color','#800000');
		$('#java_vitruvian_box').css('background-color','white');
		$('#java_renaissance_box').css('opacity','0.5');
		$('#java_davinci_box').css('opacity','1');
		$('#java_vitruvian_box').css('opacity','0.5');
		$('#java_vitruvian_button').text('Show Overview')
		$('#java_renaissance_button').text('Show Overview')
		$('#java_davinci_button').text('Showing')
	});
	$('#java_compare_1').on('mouseenter',function(){
		$('#java_compare_box_2').slideUp();
		$('#java_compare_box_3').slideUp();
		$('#java_compare_box_4').slideUp();
		$('#java_compare_box_1').slideDown('slow');
		$('#java_compare_2').css('opacity','0.5');
		$('#java_compare_3').css('opacity','0.5');
		$('#java_compare_4').css('opacity','0.5');
		$('#java_compare_1').css('opacity','1');
	});
	$('#java_compare_2').on('mouseenter',function(){
		$('#java_compare_box_1').slideUp();
		$('#java_compare_box_3').slideUp();
		$('#java_compare_box_4').slideUp();
		$('#java_compare_box_2').slideDown('slow');
		$('#java_compare_1').css('opacity','0.5');
		$('#java_compare_3').css('opacity','0.5');
		$('#java_compare_4').css('opacity','0.5');
		$('#java_compare_2').css('opacity','1');
	});
	$('#java_compare_3').on('mouseenter',function(){
		$('#java_compare_box_1').slideUp();
		$('#java_compare_box_2').slideUp();
		$('#java_compare_box_4').slideUp();
		$('#java_compare_box_3').slideDown('slow');
		$('#java_compare_1').css('opacity','0.5');
		$('#java_compare_2').css('opacity','0.5');
		$('#java_compare_4').css('opacity','0.5');
		$('#java_compare_3').css('opacity','1');
	});
	$('#java_compare_4').on('mouseenter',function(){
		$('#java_compare_box_1').slideUp();
		$('#java_compare_box_2').slideUp();
		$('#java_compare_box_3').slideUp();
		$('#java_compare_box_4').slideDown('slow');
		$('#java_compare_1').css('opacity','0.5');
		$('#java_compare_2').css('opacity','0.5');
		$('#java_compare_3').css('opacity','0.5');
		$('#java_compare_4').css('opacity','1');
	});
	// $('#java_quote_1_div').on('mouseenter',function(){
// 		$('#java_quote_2').slideUp('fast');
// 		$('#java_quote_3').slideUp('fast');
// 		$('#java_quote_4').slideUp('fast');
// 		$('#java_quote_5').slideUp('fast');
// 		$('#java_quote_1').slideDown('fast');
// 		$('#inrix').hide();
// 		$('#inrixcolor').css("display","block");
// 		$('#doubledown').css("display","block");
// 		$('#doubledowncolor').hide();
// 		$('#wetpaint').show();
// 		$('#wetpaintcolor').hide();
// 		$('#akvelon').show();
// 		$('#akveloncolor').hide();
// 		$('#netmotion').show();
// 		$('#netmotioncolor').hide();
// 	});
// 	$('#java_quote_2_div').on('mouseenter',function(){
// 		$('#java_quote_1').slideUp('fast');
// 		$('#java_quote_3').slideUp('fast');
// 		$('#java_quote_4').slideUp('fast');
// 		$('#java_quote_5').slideUp('fast');
// 		$('#java_quote_2').slideDown('fast');
// 		$('#wetpaint').hide();
// 		$('#wetpaintcolor').css("display","block");
// 		$('#inrix').show();
// 		$('#inrixcolor').hide();
// 		$('#doubledown').css("display","block");
// 		$('#doubledowncolor').hide();
// 		$('#akvelon').show();
// 		$('#akveloncolor').hide();
// 		$('#netmotion').show();
// 		$('#netmotioncolor').hide();
// 	});
// 	$('#java_quote_3_div').on('mouseenter',function(){
// 		$('#java_quote_1').slideUp('fast');
// 		$('#java_quote_2').slideUp('fast');
// 		$('#java_quote_4').slideUp('fast');
// 		$('#java_quote_5').slideUp('fast');
// 		$('#java_quote_3').slideDown('fast');
// 		$('#doubledown').hide();
// 		$('#doubledowncolor').css("display","block");
// 		$('#inrix').show();
// 		$('#inrixcolor').hide();
// 		$('#wetpaint').show();
// 		$('#wetpaintcolor').hide();
// 		$('#akvelon').show();
// 		$('#akveloncolor').hide();
// 		$('#netmotion').show();
// 		$('#netmotioncolor').hide();
// 	});
// 	$('#java_quote_4_div').on('mouseenter',function(){
// 		$('#java_quote_1').slideUp('fast');
// 		$('#java_quote_2').slideUp('fast');
// 		$('#java_quote_3').slideUp('fast');
// 		$('#java_quote_5').slideUp('fast');
// 		$('#java_quote_4').slideDown('fast');
// 		$('#akvelon').hide();
// 		$('#akveloncolor').css("display","block");
// 		$('#inrix').show();
// 		$('#inrixcolor').hide();
// 		$('#wetpaint').show();
// 		$('#wetpaintcolor').hide();
// 		$('#doubledown').css("display","block");
// 		$('#doubledowncolor').hide();
// 		$('#netmotion').show();
// 		$('#netmotioncolor').hide();
// 	});
// 	$('#java_quote_5_div').on('mouseenter',function(){
// 		$('#java_quote_1').slideUp('fast');
// 		$('#java_quote_2').slideUp('fast');
// 		$('#java_quote_3').slideUp('fast');
// 		$('#java_quote_4').slideUp('fast');
// 		$('#java_quote_5').slideDown('fast');
// 		$('#netmotion').hide();
// 		$('#netmotioncolor').css("display","block");
// 		$('#inrix').show();
// 		$('#inrixcolor').hide();
// 		$('#wetpaint').show();
// 		$('#wetpaintcolor').hide();
// 		$('#doubledown').css("display","block");
// 		$('#doubledowncolor').hide();
// 		$('#akvelon').show();
// 		$('#akveloncolor').hide();
// 	});
	$("#java_step_1_trigger").hover(
	    function() {
	        $("#java_step_drop_down_1").slideToggle("normal");
					$("#java_step_1_div").slideToggle("normal");
					$("#java_step_1_div").css("background-color","#800000");
					$("#java_step_1_div").css("color","white");
					$("#java_step_1_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_1").slideToggle("normal");
					$("#java_step_1_div").slideToggle("normal");
					$("#java_step_1_div").css("background-color","white");
					$("#java_step_1_div").css("color","black");
					$("#java_step_1_curtain").css("background-color","white");
	    }
	);
	$("#java_step_2_trigger").hover(
	    function() {
	        $("#java_step_drop_down_2").slideToggle("normal");
					$("#java_step_2_div").slideToggle("normal");
					$("#java_step_2_div").css("background-color","#800000");
					$("#java_step_2_div").css("color","white");
					$("#java_step_2_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_2").slideToggle("normal");
					$("#java_step_2_div").slideToggle("normal");
					$("#java_step_2_div").css("background-color","white");
					$("#java_step_2_div").css("color","black");
					$("#java_step_2_curtain").css("background-color","white");
	    }
	);
	$("#java_step_3_trigger").hover(
	    function() {
	        $("#java_step_drop_down_3").slideToggle("normal");
					$("#java_step_3_div").slideToggle("normal");
					$("#java_step_3_div").css("background-color","#800000");
					$("#java_step_3_div").css("color","white");
					$("#java_step_3_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_3").slideToggle("normal");
					$("#java_step_3_div").slideToggle("normal");
					$("#java_step_3_div").css("background-color","white");
					$("#java_step_3_div").css("color","black");
					$("#java_step_3_curtain").css("background-color","white");
	    }
	);
	$("#java_step_4_trigger").hover(
	    function() {
	        $("#java_step_drop_down_4").slideToggle("normal");
					$("#java_step_4_div").slideToggle("normal");
					$("#java_step_4_div").css("background-color","#800000");
					$("#java_step_4_div").css("color","white");
					$("#java_step_4_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_4").slideToggle("normal");
					$("#java_step_4_div").slideToggle("normal");
					$("#java_step_4_div").css("background-color","white");
					$("#java_step_4_div").css("color","black");
					$("#java_step_4_curtain").css("background-color","white");
	    }
	);
	$("#java_step_5_trigger").hover(
	    function() {
	        $("#java_step_drop_down_5").slideToggle("normal");
					$("#java_step_5_div").slideToggle("normal");
					$("#java_step_5_div").css("background-color","#800000");
					$("#java_step_5_div").css("color","white");
					$("#java_step_5_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_5").slideToggle("normal");
					$("#java_step_5_div").slideToggle("normal");
					$("#java_step_5_div").css("background-color","white");
					$("#java_step_5_div").css("color","black");
					$("#java_step_5_curtain").css("background-color","white");
	    }
	);
	$("#java_step_6_trigger").hover(
	    function() {
	        $("#java_step_drop_down_6").slideToggle("normal");
					$("#java_step_6_div").slideToggle("normal");
					$("#java_step_6_div").css("background-color","#800000");
					$("#java_step_6_div").css("color","white");
					$("#java_step_6_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_6").slideToggle("normal");
					$("#java_step_6_div").slideToggle("normal");
					$("#java_step_6_div").css("background-color","white");
					$("#java_step_6_div").css("color","black");
					$("#java_step_6_curtain").css("background-color","white");
	    }
	);
	$("#java_step_7_trigger").hover(
	    function() {
	        $("#java_step_drop_down_7").slideToggle("normal");
					$("#java_step_7_div").slideToggle("normal");
					$("#java_step_7_div").css("background-color","#800000");
					$("#java_step_7_div").css("color","white");
					$("#java_step_7_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_7").slideToggle("normal");
					$("#java_step_7_div").slideToggle("normal");
					$("#java_step_7_div").css("background-color","white");
					$("#java_step_7_div").css("color","black");
					$("#java_step_7_curtain").css("background-color","white");
	    }
	);
	$("#java_step_8_trigger").hover(
	    function() {
	        $("#java_step_drop_down_8").slideToggle("normal");
					$("#java_step_8_div").slideToggle("normal");
					$("#java_step_8_div").css("background-color","#800000");
					$("#java_step_8_div").css("color","white");
					$("#java_step_8_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_8").slideToggle("normal");
					$("#java_step_8_div").slideToggle("normal");
					$("#java_step_8_div").css("background-color","white");
					$("#java_step_8_div").css("color","black");
					$("#java_step_8_curtain").css("background-color","white");
	    }
	);
	$("#java_step_9_trigger").hover(
	    function() {
	        $("#java_step_drop_down_9").slideToggle("normal");
					$("#java_step_9_div").slideToggle("normal");
					$("#java_step_9_div").css("background-color","#800000");
					$("#java_step_9_div").css("color","white");
					$("#java_step_9_curtain").css("background-color","#800000");
	    },
	    function() {
	        $("#java_step_drop_down_9").slideToggle("normal");
					$("#java_step_9_div").slideToggle("normal");
					$("#java_step_9_div").css("background-color","white");
					$("#java_step_9_div").css("color","black");
					$("#java_step_9_curtain").css("background-color","white");
	    }
	);
});