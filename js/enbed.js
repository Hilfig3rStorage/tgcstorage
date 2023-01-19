//Checking if the page is loaded in an iframe

if(window.self != window.top) {

//Analyzing URL to check embed link

try {

if(window.parent.location.hostname.indexOf("https://sites.google.com/k12.friscoisd.org/tgcofficial/") == -1) {

window.location.href = "https://example.com";

} else {

//iFrame from host site

}

} catch (ex) {

//Unbed blocks embed

window.location.href = "https://example.com/unbed/blocked/index.html";

}

} 
