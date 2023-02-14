{/* </body><button onclick="ola(0)">olA</button> */}
{/* <p id="demo"></p> */}


var xhttp = new XMLHttpRequest();
function ola(value){
 showResult(xhttp.responseXML,value);
}
       

xhttp.open("GET", "books.xml", true);
xhttp.send(); 

function showResult(xml,value) {
var array=["/bookstore/book/title"]
    var txt = "";
    path = array[value];
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        } 
    // Code For Internet Explorer
    } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
    document.getElementById("demo").innerHTML = txt;
    
}
