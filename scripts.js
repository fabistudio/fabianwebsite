$(document).ready(function(){

  $("#nitaraluca").mouseover(function(){
    $(".nitaraluca").toggleClass("none");
    $(".EP2").addClass("none");
  });

  $("#nitaraluca").click(function(){
    $(".nitaraluca, .EP2").addClass("none");
    $(".nounder").removeClass("underline");
    $(this).addClass("underline");
  });

  $("#EP2").hover(function(){
    $(".EP2").toggleClass("none");
    $(".nitaraluca").addClass("none");
  });

  $("#EP2").click(function(){
    $(".EP2, .nitaraluca").addClass("none");
    $(".nounder").removeClass("underline");
    $(this).addClass("underline");
  });



  $(".examplemail").click(function(){
    $(this).addClass("active");
    $("button").removeProp('disabled');
  });

  $(".sync").mouseup(function(){
    $(".email").fadeIn("slow");
    $(".googlecard").fadeIn("slow");
    $(".onboarding").addClass("dis");
  });


  $(".navIcon").hover(function(){
    $(this).toggleClass("active")
  })

  $(".settings, .settingswide").hover(function(){
    $(this).toggleClass("active")
  })


  $(".chevron, .chev").click(function(){
    $(".addDevice").slideToggle()
    $(".navBar").toggleClass("none")
    $(".stats").toggleClass("dis")
  })

  $(".addDevice").mouseleave(function(){
    $(".addDevice").slideToggle()
    $(".navBar").toggleClass("none")
    $(".stats").toggleClass("dis")
  })

  $(".send").click(function(){
    $(".stats").addClass("dis")
    $(".sendCard").fadeIn("slow")
  })

  $(".cardbutton").click(function(){
    $(".stats").removeClass("dis")
    $(".sendCard").fadeOut("slow")
  })



  $("#Google").click(function(){
    $("#Google").addClass("smaller");
  });
  $("#Join").click(function(){
    $("#Join").addClass("smaller");
  });

  $(".dot").click(function(){
    $(".dot").addClass("dotActive")
  });

  $(':input[type="submit"]').prop('disabled', true);
       $('input[type="password"]').keyup(function() {
          if($(this).val() != '') {
             $(':input[type="submit"]').prop('disabled', false);
          }
  });

  $('.barchart').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.piechart').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#piemenu'
  });

  $('#piemenu').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.piechart',
    rows: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });






});
