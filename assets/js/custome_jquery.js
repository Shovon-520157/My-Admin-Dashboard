$(document).ready(function () {
  //________ Password show start ________//
  $('#hide').on('click', ()=> {
    if($('#password').attr('type', 'password')) {
      $('#password').attr('type', 'text');
      $('#show').show();
      $('#hide').hide();
    }
  })
  $('#show').on('click', ()=> {
    if($('#password').attr('type', 'text')) {
      $('#password').attr('type', 'password');
      $('#show').hide();
      $('#hide').show();
    }
  })
  //________ Password show end ________//


  //________ side bar toggle start ________//
  $('.toggle').on('click', ()=> {
    $('.sidebar').toggleClass('active');
    $('.main').toggleClass('active');
  })

/*
  $('.sidebar ul li a').on('click', (e) => {
    e.preventDefault();
  })
*/
  //________ side bar toggle end ________//


  //________ profile show start ________//
  $('.profile img').on('click', ()=> {
    $('.profile ul').toggleClass('active');
  })
  //________ profile show end ________//

})



//________ Window scroll ________//
/*
$('.sidebar').scroll(function() {
  if($('.sidebar').scrollTop()) {
    $('.sidebar .logo a').addClass('active');
  } else {
    $('.sidebar .logo a').removeClass('active');
  }
})
*/
