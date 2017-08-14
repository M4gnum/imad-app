var button = document.getElementById('counter');

button.onclick = function(){
   
    //request
    var request = new XMLHttpRequest();
    
    //capture
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://sourabhsupnekar20.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name

var submit = document.getElementById('b1');

submit.onclick = function(){
    //get request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                //render names
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i = 0;i < names.length; i++)
                {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('ulist');
                ulist.innerHTML = list;
            }
        }
    };
    
    var inputName = document.getElementById('name');
    var Name = inputName.value;
    request.open('GET', 'http://sourabhsupnekar20.imad.hasura-app.io/submit-name?name=' + Name, true);
    request.send(null);
};