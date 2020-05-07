console.log("hello in background script");

var dataArray=[];
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    alert("message received");
    console.log("in listerner");
    dataArray.push(message);
    console.log(message);
    console.log(dataArray);
});

