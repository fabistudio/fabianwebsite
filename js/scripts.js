$(document).ready(function(){

  $(".nounder").click(function(){
    $(".nounder").removeClass("underline");
    $(this).addClass("underline");
  });


  $(".home").click(function(){
    $(".home").removeClass("underline");
    $(this).addClass("underline");
  });

});


// Actions menu filter
$("#graphic").click(function(){
  $(".VFX, .photography, .3D, .other").hide();
  $(".graphic").show();
});

$("#3D").click(function(){
  $(".graphic, .photography, .VFX, .other").hide();
  $(".3D").show();
});

$("#photography").click(function(){
  $(".graphic, .3D, .VFX, .other").hide();
  $(".photography").show();
});

$("#VFX").click(function(){
  $(".graphic, .photography, .3D, .other").hide();
  $(".VFX").show();
});

$("#other").click(function(){
  $(".graphic, .photography, .VFX, .3D").hide();
  $(".other").show();
});

$("#fabian").click(function(){
  $(".graphic, .photography, .VFX, .3D, .other").show();
});



$(window).on('load', function(){

  function responsive(maxWidth) {
    if (maxWidth.matches) {
        $('.imgbox').hide();
        $(".midnav").click(function(){
        $(".imgbox").show();
      })
    }
  }
  var maxWidth = window.matchMedia("(max-width: 850px)");

  responsive(maxWidth);
  maxWidth.addListener(responsive);

  var currentSelected = '';

  $('.list').on('click touchstart', 'span', function () {
    currentSelected = $(this).attr('id');
    if($(window).width() < 850) {
      console.log("triggers", currentSelected)
      $(".data").addClass('hidden');
      $("." + currentSelected).removeClass('hidden');
      $('.list span').removeClass('underline');
      $(this).addClass('underline');
      setTimeout(function () {
        $("." + currentSelected).find('.slider')
          .slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            speed: 0,
            // fade: true,
          });
      }, 200)
      window.scrollTo(0, 0);
    }
  })

  $('.list span').mouseenter(function () {
    var idLink = $(this).attr('id');
    if(idLink !== '') {
      $(".data").addClass('hidden');
      $("." + idLink).removeClass('hidden');
    }
  })

  $('.list span').mouseleave(function () {
    if(currentSelected !== '') {
      $(".data").addClass('hidden');
      $("." + currentSelected).removeClass('hidden');
    }
  });

  if($(window).width() >= 850) {
    $(".slider").each(function (i, e) {
      $(e).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 0,
        // fade: true,
      });
    })
  }

});
