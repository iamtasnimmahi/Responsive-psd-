$(function(){

    // banner part start
    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows:false,
      });
    // banner part end
    
    // service part start
    $('.service_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows:false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
       
        ],
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
       
        ],
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
       
        ],

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
       
        ],
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
       
        ],

      });
    // service part end

// portfolio mixit up start

var containerEl = document.querySelector('.mixit_filter');

            var mixer = mixitup(containerEl);

//portfolio mixit up end

// Presentation part start
new VenoBox({
  selector: ".my-video-links"
});
// Presentation part end

  // counter part start
  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 30,
        time: 2000
    });
  });
  
  // counter part end

  // recent post part start
  $('.post_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],
  });
  // recent post part end

  // image part start
  $('.img_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ], 

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
   
    ],
  });
  // image part end

});