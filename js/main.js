$('.sticker').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img class='current'>");
var $caption = $("<p></p>");
var $leftArrow = $("<div><p id='leftArrow'><</p></div>");
var $rightArrow = $("<div><p id='rightArrow'>></p></div>");
var galleryMax = $('.gallery-item').length;
var newImgLocation;
//var counter = 0;
var newImg;

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

  //set this a as .selected
  $(this).addClass("selected");
});

// when overlay is clicked 
$('.current').click(function(){
  //hide overlay
  $overlay.hide();
  //remove selected class from 'a' links
  $(".selected").removeClass("selected");
});
  
$('#leftArrow').click(function(){
  //counter -= 1;
  newImg = $("#imageGallery .selected").parent(".gallery-item").prev().children("a");
  console.log(newImg);
  newImgLocation = newImg.attr("href");
  newImg.parent(".gallery-item").next().children("a").removeClass("selected");
  newImg.addClass("selected");
  $image.attr("src",newImgLocation)
  //update caption here
  captionText = newImg.children("img").attr("alt");
  $caption.text(captionText);
});

$('#rightArrow').click(function(){
  //counter += 1;
  newImg = $("#imageGallery .selected").parent(".gallery-item").next().children("a");
  console.log(newImg);
  newImgLocation = newImg.attr("href");
  newImg.parent(".gallery-item").prev().children("a").removeClass("selected");
  newImg.addClass("selected");
  $image.attr("src",newImgLocation)
  //update caption here
  captionText = newImg.children("img").attr("alt");
  $caption.text(captionText);

});



















