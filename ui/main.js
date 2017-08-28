
//Login

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    //get request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
               console.log('Logged in');
               alert('Logged in');
            }
            else if(request.status === 403)
            {
                alert('Username/password is wrong');
            }
            else if(request.status === 500)
            {
                alert('Something went wrong at the server');
            }
        }
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://sourabhsupnekar20.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username : username, password: password}));
};