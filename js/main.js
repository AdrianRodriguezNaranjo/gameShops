var xhttp = new XMLHttpRequest();
function getConsul(value) {
  showResult(xhttp.responseXML, value);
}

xhttp.open("GET", "gameShop.xml", true);
xhttp.send();

function showResult(xml, value) {
  var array = ["//game_name","//figure_name","/shops/shop/games/game[3]/game_name","//figure_name[fn:codepoint-equal(type,'Peluche')]",
"//game/node()","//figure[1]/text()","//games/*","//game[/platform/game_priece <20]","//figure_priece[. > 60]","/game//platform_name"];
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
