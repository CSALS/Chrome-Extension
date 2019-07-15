function runAfter() {
    // await runIt();
    chrome.tabs.create({active:true,url:"https://www.target.com/co-cart"});
}
function runIt() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "http://localhost:4192/api/v1/get/url", true); //calling get API to get all the urls added by user
    // xhttp.send();
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var jsonObj = JSON.parse(this.responseText); //iterating through response
    //         var values = jsonObj.cart;
    //         for (let key of values) {
    //             let urls = key.url;
    //             chrome.tabs.create({ //creating chrome tab of single url
    //                 active: false,
    //                 url: urls //fixing problem of // in urls given by API
    //             }, function (tab) {
    //                 //running the content_script file to click the button
    //                 chrome.tabs.executeScript(tab.id, {
    //                     file: "content_script.js"
    //                 });
    //             });
    //         }
    //         chrome.tabs.create({active:true,url:"https://www.target.com/co-cart"});
    //         // https://www.target.com/co-cart
    //         //To open the cart page , use set interval to keep reloading the page and finally stop the event
    //     }
    // };
    let url = "" //GIVE A TARGET.COM URL
    chrome.tabs.create({
        active: false,
    }, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                file: "content_script.js"
            });
        });
    chrome.tabs.create({active:true,url:"https://www.target.com/co-cart"});
}


var btn = document.getElementById("purchaseBtn")
if (btn) {
    addEventListener("click", runIt);
}
