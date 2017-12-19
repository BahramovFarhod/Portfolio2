
// ---------------------Header FOTOS------------------------------------
  var total_pics_num = 4; 
  var interval = 5000;    
  var time_out = 1;       
  var i = 0;
  var timeout;
  var opacity = 100;
  function fade_to_next() {
    opacity--;
    var k = i + 1;
    var image_now = 'image_' + i;
    if (i == total_pics_num) k = 1;
    var image_next = 'image_' + k;
    document.getElementById(image_now).style.opacity = opacity/100;
    document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
    document.getElementById(image_next).style.opacity = (100-opacity)/100;
    document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
    timeout = setTimeout("fade_to_next()",time_out);
    if (opacity==1) {
      opacity = 100;
      clearTimeout(timeout);
    }
  }
  setInterval (
    function() {
      i++;
      if (i > total_pics_num) i=1;
      fade_to_next();
    }, interval
  );


// SCRIPT voor 14 stuk info deel van PORTFOLIO !//

document.addEventListener('DOMContentLoaded', function() {
  var items = document.getElementsByTagName("li");
  
  Array.prototype.forEach.call(items, function(item, idx) {
    setTimeout(function(){
      item.classList.add('animated');
    },idx * 150); 
  });
});






// Animation on letters!
Array.from(document.getElementsByClassName('letter')).forEach(letter => {
  letter.addEventListener('mouseover', (e) => {
    letter.classList.add('hovered')
  })
  letter.addEventListener('animationend', (e) => {
    letter.classList.remove('hovered')
  })
})

// Random shapes!
const numShapes = 3
const maxSize = 200

let colors = []
function setup () {
  colors = [
    color(255, 143, 0, 80),
    color(255, 128, 171, 80),
    color(255, 193, 7, 80),
    color(76, 175, 80, 80),
    color(0, 188, 212, 80),
    color(171, 71, 188, 80),
    color(239, 83, 80, 80)
  ]
  createCanvas(window.innerWidth, document.body.offsetHeight)
  noStroke()
}

function randomNumber (size) {
  return Math.floor(Math.random() * size)
}

function randomChoice (choices) {
  let index = randomNumber(choices.length)
  return choices[index]
}

function mouseClicked () {
  let sideLength = randomNumber(maxSize)
  fill(randomChoice(colors))
  let shapeType = randomNumber(numShapes)
  if (shapeType % numShapes == 0) {
    ellipse(mouseX, mouseY, sideLength, sideLength)
  } else if (shapeType % numShapes == 1) {
    rect(mouseX, mouseY, sideLength, sideLength)
  } else {
    triangle(mouseX, mouseY, mouseX + sideLength, mouseY,
      mouseX + (0.5 * sideLength), mouseY - sideLength)
  }
}

window.onresize = () => {
  resizeCanvas(window.innerWidth, document.body.offsetHeight)
}

// Dynamic Header!
window.onscroll = (e) => {
  let scrollPosition = window.scrollY
  let headerName = document.getElementById('header-name')
  let header = document.getElementById('header')
  if (scrollPosition > 179) {
    
    header.classList.add('white')
  } else {
    headerName.classList.add('hidden')
    header.classList.remove('white')
  }
}


// Dit script is voor   //





