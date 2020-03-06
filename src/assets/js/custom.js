


// Stat Slider
 $(document).ready(function() {
    var owl = $('.contributor_slider');
    owl.owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  });

  

  $(document).ready(function() {
    var owl = $('.lang_slider');
    owl.owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:8000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 7
        }
      }
    })
  });

  $(document).ready(function() {
    var owl = $('.beauty_row');
    owl.owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    })
  });

  
  $(document).ready(function() {
    var owl = $('.project_slider');
    owl.owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 4
        }
      }
    })
  });
  

  $(document).ready(function() {
    var owl = $('.case_study_slider');
    owl.owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    })
  });

  jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 700,
      //grab the "back to top" link
      $back_to_top = $('.cd-top');
  
    //hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if( $(this).scrollTop() > offset_opacity ) { 
        $back_to_top.addClass('cd-fade-out');
      }
    });
  
    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
         }, scroll_top_duration
      );
    });
  
  });

  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});