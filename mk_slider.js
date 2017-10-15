$(function(){
  var mySlid = 0;
  $('.wrapperSlider img:nth-child(1)').css('display','inline-block');
  for(var i = 0; i < $('.wrapperSlider img').length; i++){
    $('.panelSlider').append('<li class="imgSlider'+(i+1)+'"></li>');
  }
  $('.panelSlider li').click(function(){
    var slidNumber = $(this).attr('class').slice(9);
    mySlid = slidNumber;
    $('.panelSlider li').css('background-color','white');
    $(this).css('background-color','#555');
    $('.wrapperSlider img').css('display','none');
    $('.wrapperSlider img:nth-child('+slidNumber+')').css('display','inline-block');
  });
  
  $('.panelSlider li:nth-child(1)').css('background-color','#555');
  $('.wrappList').click(function(){
    if(mySlid == $('.wrapperSlider img').length){
      mySlid = 0;
      $('.wrapperSlider img').css('display','none');
      $('.panelSlider li').css('background-color','white');
      $('.wrapperSlider img:nth-child(1)').css('display','inline-block');
    }
    $('.wrapperSlider img:nth-child('+mySlid+')').css('display','none');
    $('.panelSlider li:nth-child('+mySlid+')').css('background-color','white');
    mySlid++;
    $('.wrapperSlider img:nth-child('+mySlid+')').css('display','inline-block');
    $('.panelSlider li:nth-child('+mySlid+')').css('background-color','#555');
  });
});  