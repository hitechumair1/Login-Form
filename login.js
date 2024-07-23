
    function show(){
        var a = document.getElementById("password");
        var b = document.getElementById("show");
if(a.type == "password"){
    a.setAttribute('type', 'text');
b.innerText = "Hide";
}
else{
    a.setAttribute('type', 'password');
b.innerText = "Show";
}
    }
 

