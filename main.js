//initialize
var $carousel = $('.main-carousel').flickity({
    // options
     "cellAlign": "left", 
     //"autoPlay": true, 
     "wrapAround": true, 
     "draggable": true 
  })

//flickity data / properties 
var flkty = $carousel.data('flickity')
console.log('flkty object: ' + flkty)

var numSlides = flkty.cells.length
console.log('total slides:' + numSlides)

//set text for steps using selected slide at load
var slideNum = flkty.selectedIndex +1
console.log('current slide: ' + slideNum)
$('.steps').text(slideNum + '/' + numSlides)

//to set text for steps using selected slide after move 
/*var updateSteps = function(){
    var slideNum = flkty.selectedIndex +1
    $('.steps').text(slideNum + '/' + numSlides)
}

$('.next').on('click', function(){
    $carousel.flickity('next')
    updateSteps()
})

$('.prev').on('click', function(){
    $carousel.flickity('previous')
    updateSteps()
})*/