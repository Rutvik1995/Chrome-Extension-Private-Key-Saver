console.log("Hello World From content js");
// $('button').click(function(){
//   console.log("in Jquery Function");
//   alert("button click");
//   alert("From Button click 2");
 
//   console.log(this);

// })

var emailId;
document.addEventListener("click", function(event){
//alert("from js");
  // console.log(event.target);
  // console.log(event.srcElement);
   var check = event.srcElement;
  // console.log(check.id);
 
  if(check.id=="RegisterUser")
  {
    console.log("Inside if loop")
    console.log(emailId);
    chrome.storage.sync.get(['key'], function(result) {
      //console.log(result);
      console.log("In getter method");
      var x=0;
     // var obj = JSON.parse(result);
     console.log("in line 2");
     console.log(result);
     for(var prop in result) {
      if(result.hasOwnProperty(prop)){
        x=1;
      }    
  }
  if(x==0){
    console.log("result is empty" );
  }


      
    });
  }


 });

document.addEventListener("hello", function(data) {
  console.log(data);
  console.log(data.detail);
  var myJSON = JSON.stringify(data.detail);
  emailId=data.detail.emailId;
  console.log(emailId);
  chrome.runtime.sendMessage("test");
  console.log("In setter method");
  chrome.storage.sync.set({"key": myJSON}, function() {
    console.log('Value is set to ' + myJSON);
  });
  


});