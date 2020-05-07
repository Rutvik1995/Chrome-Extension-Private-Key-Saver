# Chrome-Extension-Private-Key-Saver
The extension saves the user's private key and the public key is saved on blockchain

<br>
Piece of code I use to pass data between my web application to chrome extension 
 <br>var event = document.createEvent('Event');
 // Creatating the custom event 
 <br>
 <br>
 <br>     var event = new CustomEvent(
<br>      "newMessage", 
<br>      {
<br>        detail: {
<br>          message: "Hello World!",
<br>          time: new Date(),
<br>         name:"Rutvik Patel",
<br>          emailId:"rpatel@csus.edu",
<br>          privateKey:"dhdhdhdhdhd"
<br>        },
<br>        bubbles: true,
<br>        cancelable: true
<br>      }
<br>    )
