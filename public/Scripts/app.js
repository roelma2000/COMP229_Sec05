//IIFE - Immediately Invoked Function Expression
(function(){
    function Start(){

    console.log("Starting the app...")
    }

    function submitMe() {
        alert("Thank you. I will respond to you ASAP. Here are the details you entered:" + "\n\n"
            +"Your Email: " + document.getElementById("email").value + "\n"
            + "Your Last Name: " + document.getElementById("lname").value + "\n"
            + "Your First Name: " + document.getElementById("fname").value + "\n"
            + "Your Message:\n           " + document.getElementById("message").value + "\n"
        );
   }
 
    window.addEventListener("load",Start);
}
)();