var button = document.getElementById('counter');

button.onclick = function(){
   
    //request
    var request = XMLHttpRequest();
    
    //capture
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            var counter = request.resposeText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    };
    
    request.open('GET', 'http://sourabhsupnekar20.imad.hasura-app.io/counter', true);
    request.send(null);
};