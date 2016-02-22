                var signUpNow = $('.sign-up-now-btn');
                signUpNow.click(function() {
                    alert("We are not currently taking sign ups");
                    signUpNow.html('No Sign Ups!')
                });

                $(".more-text").hide();

                var show = false;
                if (show) {
                    hide();
                    show = false;
                } else {
                    show();
                    show = true;
                }

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
    