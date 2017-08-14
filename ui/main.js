console.log('Loaded!');

var element = document.getElementById('new1');
element.innerHTML = 'New home page';

var imgElement = document.getElementById('img1');
imgElement.onClick = function() {
    imgElement.style.margin = '100px';
};