$(document).ready(function(){ 
//color;
  $('.default').click(function(){
    $('body').addClass('default').removeClass('blue').removeClass('green').removeClass('pink');
  });
  $('.green').click(function(){
    $('body').addClass('green').removeClass('blue').removeClass('pink');
  });
  $('.blue').click(function(){
    $('body').addClass('blue').removeClass('green').removeClass('pink');
  });
  $('.pink').click(function(){
    $('body').addClass('pink').removeClass('blue').removeClass('green');
  });

 
    //slider;
    $('.banner-slider').slick({
    autoplay: false,
    autoplaySpeed: 1800, 
    dots: true,
   
    arrows:false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
      
        }
      },
      {
        breakpoint: 768,
        settings: {
     
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });


   //venobox;

    $('.venobox').venobox(); 

        //team-slider;
    $('.team-slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
       slidesToShow:4,
        arrows:false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1800, 
                dots: false,
                Arrrows:false
              }
            },
            {
              breakpoint: 768,
              settings: {
                autoplay: true,
                autoplaySpeed: 1800, 
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                Arrrows:false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    
        });

 //team-slider;
 $('.testi-slider').slick({
    autoplay: true,
    autoplaySpeed: 1800, 
    dots: true,
    slidesToShow:2,
    arrows:false,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
            arrows:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    

    });
//patner-slider;
$('.patner-slider').slick({
    autoplay: true,
    autoplaySpeed: 1800, 
    dots: false,
   slidesToShow:5,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
    centerMode:true,
    centerPadding:'0px',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            arrows:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
 //counter;
  
 $('.counter').counterUp({
    delay: 10,
    time: 1000
});






});     






