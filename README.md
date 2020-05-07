# Chrome-Extension-Private-Key-Saver
The extension saves the user's private key and the public key is saved on blockchain

<br>
<h2>Piece of code I use to pass data between my web application to chrome extension </h2>
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


<h2>This is code which is use to get data which is send from the chrome extension to React </h2>


<br> async componentDidMount(){
<br>      document.addEventListener('csEvent', this.checkEvent);
<br>    }
<br>    async componentWillMount(){
<br>      console.log("in component will mount");
<br>      await this.loadWeb3()
<br>      await this.loadBlockChainData();
<br>      document.addEventListener('csEvent', this.checkEvent);
<br>    }
<br>
<br>    checkEvent = (event) => {
<br>      var data = event.detail;
<br>      console.log(data);
<br>      console.log("Nv Enter:", event);
<br>    }






