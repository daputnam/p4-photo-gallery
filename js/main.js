/*
$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});



$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('.work').sticky({
  topSpacing: 60,
  getWidthFrom: '.container',
  responsiveWidth: true
});
$('.work').on('sticky-start', function() {
  $(this).append(' <a href="mailto:email@website.com" class="email-text">Email&nbsp;us</a>');
});
$('.work').on('sticky-end', function() {
    $('.email-text').remove();
});
*/


$('.sticker').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

//lightbox code
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $leftArrow = $("<div><p id='leftArrow'><</p></div>");
var $rightArrow = $("<div><p id='rightArrow'>></p></div>");

$overlay.append($leftArrow);
$overlay.append($image);
$overlay.append($rightArrow);
// add overlay
$overlay.append($caption);
    //a caption
$("body").append($overlay);
// capture click on link to image
$('#imageGallery a').click(function(event){
  event.preventDefault();
  console.log($(this).attr('href'));
  //update overlay with the image linked in the link
  //add caption from alt and title from title
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  //show overlay
  $overlay.show();

  //get alt tag and set as caption
  var captionText = $(this).children("img").attr("alt");

  $caption.text(captionText);

});
// when overlay is clicked 
$('#overlay').click(function(){
  //hide overlay
  $overlay.hide();

});
  




















