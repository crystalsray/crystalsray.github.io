/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


    /* Tooltip */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



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
  includeSelectAllOption: false,
  selectAllText: 'Check Select/Deselect All',
  selectAllNumber: false,
  onSelectAll: function (justVisible, triggerOnSelectAll) {
        console.log("select-all-nonreq");
        console.log(justVisible);
        console.log(triggerOnSelectAll);
        triggerOnSelectAll = true; //patch, broken
        var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
    },
  onDeselectAll: function (justVisible, triggerOnSelectAll) {
        console.log("deselect-all-nonreq");
    },
  /*selectAll: function (justVisible, triggerOnSelectAll) {
        console.log("selectAll");
        triggerOnSelectAll = true; //patch, broken
        var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
  },*/
  enableClickableOptGroups: true,
  onChange: function(option, checked, selected, element) {

      console.log(option);

      var count = option.length;
      var selectionData = [];
      var id;
      var filter;
      //var value;

      id = this.$select.attr('id');
      filter = this.$select.data('filter');

      $('#' + id + ' option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of country (or other multiselect) dropdown
      });

      /////// If multiselect field has countries, it'll likely have a corresponding regional average filter. 
      /////// Include regional average in array of selected items
      // CS_country <---> CSsourcesBar_region
      // CSLevels_country <---> CSLevels_region
      // IP_country <---> IP_region

      ////// PANEL 1
      if(id=="CS_country") {
        $('#CSsourcesBar_region option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of region dropdown
        });
      }
      else if (id == "CSsourcesBar_region") {
        $('#CS_country option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of country dropdown
        });
      }

      ////// PANEL 2
      else if(id=="CSLevels_country") {
        $('#CSLevels_region option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of region dropdown
        });
      }
      else if (id == "CSLevels_region") {
        $('#CSLevels_country option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of country dropdown
        });
      }

      ////// PANEL 3
      else if(id=="IP_country") {
        $('#IP_region option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of region dropdown
        });
      }
      else if (id == "IP_region") {
        $('#IP_country option:selected').each(function(index, element) {
          selectionData.push($(element).val()); // get selected values of country dropdown
        });
      }



      showMultiple('#'+id, filter, selectionData); // push to multiselect


   } // end onchange()
   

   
 });




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

/*$('.panel-collapse').collapse({
  toggle:  true
})*/




$( document ).ready(function() {



});


