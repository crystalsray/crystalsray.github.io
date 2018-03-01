/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


       



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	// Only enable if the document has a long scroll bar
	// Note the window height + offset
	if ( ($(window).height() + 100) < $(document).height() ) {
		$('#top-link-block').removeClass('hidden').affix({
			// how far to scroll down before link "slides" into view
			offset: {top:100}
		});
	}
});


// format mulselect into checkboxes
 $('.shops-multiselect').multiselect({
  includeSelectAllOption:true,
  selectAllText: 'Check Select/Deselect All'
 })

 //hide fields
$("#CSsourcesBar_group2").hide();


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



$('.panel-collapse').on('show.bs.collapse', function () {
   //alert('test');
  $(this).siblings(".panel-heading").addClass('down-arrow');
 });


  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings(".panel-heading").removeClass('down-arrow');
  });


$( document ).ready(function() {
  //$('.CategoricalFilterBox').css()
});


