                var signUpNow = $('.sign-up-now-btn');
                signUpNow.click(function() {
                    alert("We are not currently taking sign ups");
                    signUpNow.html('No Sign Ups!')
                });

                $(".more-text").hide();
                
                var readMore = $('.read-more');
                readMore.click(function(){
                $("p.more-text").slideToggle();
                });


    // var txt = $('.sign-up-now-btn');
    // $(txt).on('click', function(){
    //     alert('ad blocker');
    //     txt.html('yeah biddy');    
    // });            


    // alert('working');            