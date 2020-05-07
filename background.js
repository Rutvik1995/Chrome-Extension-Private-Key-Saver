console.log("hello in background script");


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
   
    console.log("in listerner");
    if(message=="test"){
        console.log(message);
        alert("Private Key Saved");
    }
    else{
        }
});

