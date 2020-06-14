console.log("Hello World From content js");
// $('button').click(function(){
//   console.log("in Jquery Function");
//   alert("button click");
//   alert("From Button click 2");
 
//   console.log(this);

// })

console.log("Hello World From content js");
window.onload = function() {
  var url =window.location.href;
  console.log(url);
  if(url.includes("http://localhost:3000/viewPost/")){
    console.log("Message from the extension");
    chrome.storage.local.get(['key'], function(result) {
      var data = {
        sendMessage:'Not Empty',
        random: 'Some data',
        more: 'More data',
        privateKeyData:result.key
        };
    //send data through a DOM event
    console.log(data);
    console.log("****************************");
      document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));
    });
  }

  if(url.includes("http://localhost:3000/MainPage")){
    console.log("Message from the extension");
    chrome.storage.local.get(['key'], function(result) {
      var data = {
        sendMessage:'Not Empty',
        random: 'Some data',
        more: 'More data',
        privateKeyData:result.key
        };
    //send data through a DOM event
    console.log(data);
    console.log("****************************");
      document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));
    });
  }
}



$( "#firstName" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
  chrome.storage.local.get(['key'], function(result) {
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
  var data = {
      sendMessage:"Empty"
    };
    document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));
}
else{
  var data = {
    sendMessage:'Not Empty',
    random: 'Some data',
    more: 'More data',
    privateKeyData:result.key
    };
// send data through a DOM event
  document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));

}   
  });
});


$('#addPost').click(function(){
  console.log("button click");
  alert("hello");
});


document.addEventListener("click", function(event){
  console.log("in evenet");
  var url =window.location.href;
  if(url.includes("http://localhost:3000/MainPage")){
    console.log("in event console.log()");
    console.log(event);
    if(event.target.id=="addPost"){
      console.log("Do Activity ");
      ////

      chrome.storage.local.get(['key'], function(result) {
        var data = {
          sendMessage:'Not Empty',
          random: 'Some data',
          more: 'More data',
          privateKeyData:result.key
          };
      //send data through a DOM event
      console.log(data);
      console.log("****************************");
        document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));
      });

      console.log("Do Activity 2");
      ////
      ///
    }
  }
 });

// document.addEventListener("click", function(event){
// //alert("from js");
//   // console.log(event.target);
//   // console.log(event.srcElement);
//    var check = event.srcElement;
//   // console.log(check.id);
 
//   if(check.id=="RegisterUser")
//   {
//     console.log("Inside if loop")
//     console.log("in if");
//     chrome.storage.sync.get(['key'], function(result) {
//       //console.log(result);
//       console.log("In getter method");
//       var x=0;
//      // var obj = JSON.parse(result);
//      console.log("in line 2");
//      console.log(result);
//      for(var prop in result) {
//       if(result.hasOwnProperty(prop)){
//         x=1;
//       }    
//   }
//   if(x==0){
//     console.log("result is empty" );
//     var data = {
//         sendMessage:"Empty"
//       };
//       document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));
//   }
//   else{
//     var data = {
//       random: 'Some data',
//       more: 'More data',
//       privateKeyData:result.key
//       };
//   // send data through a DOM event
//     document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));

//   }

      
//     });
//   }


//  });

document.addEventListener("hello", function(data) {
  console.log(data);
  console.log(data.detail);
  console.log(data.detail.privateKeyData);
  
  chrome.runtime.sendMessage("test");
  console.log("In setter method");
  chrome.storage.local.set({"key": data.detail.privateKeyData}, function() {
    console.log('Value is set to ' + data.detail.privateKeyData);
  });
  


});