var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    //request
    
    //capture
    
    //render
    counter++;
    var span = document.getElementById('count');
    span.innHTML = counter.toString();
};