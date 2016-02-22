                var signUpNow = $('.sign-up-now-btn');
                signUpNow.click(function() {
                    alert("We are not currently taking sign ups");
                    signUpNow.html('No Sign Ups!')
                });

                $(".more-text").hide();
                
                var readMore = $('.read-more');
                readMore.click(function(){
                if $(".more-text").show();
                } else {

                }

                });

                var readLess = $('.read-more');
                readLess.click(function() {
                readLess.html('Read Less');
                $(".more-text").hide();
                });


    // var txt = $('.sign-up-now-btn');
    // $(txt).on('click', function(){
    //     alert('ad blocker');
    //     txt.html('yeah biddy');    
    // });            


    // alert('working');     


    function switchLights() {
  if (lights === 'on'){
    $('body').css('background-color','#000000');
    lights = 'off';
  } else {
    lights = 'on';
    $('body').css('background-color','#ffffff');
  }
}

function readMore() {
  if ( === 'on'){
    $('body').css('background-color','#000000');
    lights = 'off';
  } else {
    lights = 'on';
    $('body').css('background-color','#ffffff');
  }
}       