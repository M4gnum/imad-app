console.log('Loaded!');

var element = document.getElementById('new1');
element.innerHTML = 'New home page';

var imgElement = document.getElementById('img1');
imgElement.onclick = function() {
    imgElement.style.marginLeft = '100px';
};