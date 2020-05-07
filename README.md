# Chrome-Extension-Private-Key-Saver
The extension saves the user's private key and the public key is saved on blockchain

<br>
Piece of code I use to pass data between my web application to chrome extension 
 <br>var event = document.createEvent('Event');
 // Creatating the custom event 
 <br>
 <br>
      var event = new CustomEvent(
      "newMessage", 
      {
        detail: {
          message: "Hello World!",
          time: new Date(),
          name:"Rutvik Patel",
          emailId:"rpatel@csus.edu",
          privateKey:"dhdhdhdhdhd"
        },
        bubbles: true,
        cancelable: true
      }
    )
