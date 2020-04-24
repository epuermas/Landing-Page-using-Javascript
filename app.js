console.log("hello world");

//Step 1: select the form with Js
let form = document.querySelector('form');

//Step 2: attach the function "send" to the form submit event
form.onsubmit = send;

//Step 3: declare the function "send" and call the function "sendEmail" when the form is sent
function send(e){
    e.preventDefault();
    alert("I was submitted")
    //call the function "sendEmail"
    sendEmail ()
}

//Step 4: get the e-mail from the "input", send the client's e-mail to your e-mail and thank the user
function sendEmail (){
    let email = document.querySelector('input');
    alert("This is the user e-mail: " + email.value)
    form.innerHTML = "Thank You! Our staff will contact you";
}