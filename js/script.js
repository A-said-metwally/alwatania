$(document).ready(function(){

  $('.left-content .eval span:first').css({
    color: "green",
    "font-weight": "bold",
    "font-size": "25px"

  });

  $('.left-content .eval span:last').css({
    color: "green",
    "font-weight": "bold",
    "font-size": "25px"

  });

  $('.v-report:first').click(function(){
      $('#data-1').slideToggle(1000)
  });

  $('table tr:first').css({
    "color" : "#fff",
    "background" : "#607080"

  })

  $('.over-lay span').click(function(){
    $(this).parent().fadeOut()
  })

  $('.d-overlay').on("click" , function(event){
    event.preventDefault();
    $('.over-lay').fadeIn(500)
  })

  $('.interacive a').hover(function(){
    $(this).parent().css("background" , "#c3ccd4")
  } , function(){
    $(this).parent().css("background" , "inherit")
  })

  $('.Transaction').click(function(){
    $('.Transaction-data').slideToggle(1000)
  })

  $('#Transdata td:contains("غياب")').parent().css("color" , "red");

});
