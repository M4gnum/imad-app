console.log('Loaded!');

var element = document.getElementById('new1');
element.innerHTML = 'New home page';

var imgElement = document.getElementById('img1');
var moveVal = 0;
function moveRight()
{
    moveVal = moveVal + 10;
    imgElement.style.marginLeft = moveval + 'px';
}
imgElement.onclick = function() {
    var interval = setInterval(moveRight, 100);
};