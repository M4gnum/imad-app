console.log('Loaded!');

var element = document.getElementById('new1');
element.innerHTML = 'New home page';

var imgElement = document.getElementById('img1');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    imgElement.style.marginLeft = marginLeft + 'px';
}
imgElement.onclick = function() {
    var interval = setInterval(moveRight, 10);
};