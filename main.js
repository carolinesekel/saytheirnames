var curr = 0

var numSlides = $('.holder div').length

var nextSlide = function(){
  console.log('next slide')
  curr = curr+1
  if (curr>=numSlides){
    curr=0
  }
  moveSlide(curr, numSlides)
}

var previousSlide = function(){
  console.log('prev slide')
  curr = curr-1
  if(curr<0){
     curr = numSlides-1
  }
  moveSlide(curr)
}

//clean up repeated code into function 
var moveSlide = function(slide){
  var leftVal = '-' + slide + '00vw'
  $('.holder').css('left', leftVal)
  var slideNum = slide+1
	$('.steps').text(slideNum + '/' + numSlides)
}

var autoSlide = setInterval(function(){
	nextSlide()
}, 5000)


//functionality for next and prev buttons 
$('.prev').on('click', function(){
  clearInterval(autoSlide)
  previousSlide()
})

$('.next').on('click', function(){
  clearInterval(autoSlide)
  nextSlide()
})

//set text for steps using curr slide at load
var slideNum = curr+1
$('.steps').text(slideNum + '/' + numSlides)

//left and right arrows
$('body').on('keydown', function(event){
  if(event.keyCode == 37){
    previousSlide()
  } 
  
  
 if(event.keyCode == 39){
   nextSlide()
 } 
})