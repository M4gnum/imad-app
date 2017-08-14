console.log('Loaded!');

var imgElement = document.getElementById('img1');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 2;
    imgElement.style.marginLeft = marginLeft + 'px';
}
imgElement.onclick = function() {
    var interval = setInterval(moveRight, 15);
};