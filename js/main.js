var signUpNow = $('.sign-up-now-btn');
signUpNow.click(function() {
    alert("We are not currently taking sign ups");
    signUpNow.html('No Sign Ups!');
});

$(".more-text").hide();

var readMore = $('.read-more');
readMore.click(function(){
  console.log('clicked');
  $(".more-text").show();
});
