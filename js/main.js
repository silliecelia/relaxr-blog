var signUpNow = $('.sign-up-now-btn');
signUpNow.click(function() {
    alert("We are not currently taking sign ups");
    signUpNow.html('No Sign Ups!');
});

$(".more-text").hide();

var show = false;
var readMore = $('.read-more');

readMore.click(function(){
    if (show) {
        show = false;
        readMore.text('Read More >');
        $(".more-text").slideUp();
    } else {
        show = true;
        $(".more-text").slideDown();
        readMore.text('Read Less >');
}
});

$(".more-text-2").hide();

var show = false;
var learnMore = $('.learn-more');

learnMore.click(function(){
    if (show) {
        show = false;
        $(".more-text-2").slideUp(200);
    } else {
        show = true;
        $(".more-text-2").slideDown(200);
}
});


    // var txt = $('.sign-up-now-btn');
    // $(txt).on('click', function(){
    //     alert('ad blocker');
    //     txt.html('yeah biddy');    
    // });            


    // alert('working');     
    