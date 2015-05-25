//ajax

function init()  {
  //init();
  //doSomethingElse();

 var options = {
 	done: function(json){
 		//console.log(json);
        var text =  json.notification;
        console.log(text);
        var element = document.querySelector(".notifications");
        element.textContent = text;
 	},
 	fail: function(err){
 		console.log(err);
 	}
 }

    UTILS.ajax("data/config.json", options);
    UTILS.addEvent("body", "onload", tabs());
   UTILS.removeEvent("body", "onLoad", tabs());
}

window.addEventListener("load", init, false);

//iframe



var elementList = document.querySelector(".link");
//console.log(elementList);
elementList.addEventListener("change", select, false);

function select(e) {
    e.preventDefault();
    var target = e.target.value;
    var frame = document.querySelector("iframe");
    frame.setAttribute("src", target);
}

//tabs


var tabLinks = [];
var contentDivs =[];

function tabs() {

    // take the tab links and content divs from the page
    var tabListItems = document.querySelector('#tabs').childNodes;
    // loop for li
    for ( var i = 0; i < tabListItems.length; i++ ) {
        if ( tabListItems[i].nodeName == "LI" ) {
            //loop for a
            var tabLink = getTagName( tabListItems[i], 'A' );
            var id = getHash( tabLink.getAttribute('href') );
            tabLinks[id] = tabLink;
            contentDivs[id] = document.getElementById( id );
        }
    }

    // Assign onclick events to the tab links, and
    // highlight the first tab
    var i = 0;
    for ( var id in tabLinks ) {
        if(tabLinks.hasOwnProperty(id)){
            tabLinks[id].onclick = showTab;
            tabLinks[id].onfocus = function() { this.blur() };
            if ( i == 0 ) tabLinks[id].className = 'selected';
            i++;}
    }

    // Hide all content divs except the first
    var i = 0;
    for ( var id in contentDivs ) {
        if(contentDivs.hasOwnProperty(id)){
            if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
            i++;
        }
    }
}

function showTab() {
    var selectedId = getHash( this.getAttribute('href') );

    // Highlight the selected tab
    // Also show the selected content div, and hide all others.
    for ( var id in contentDivs ) {
        if(contentDivs.hasOwnProperty(id)){
            if ( id == selectedId ) {
                tabLinks[id].className = 'selected';
                contentDivs[id].className = 'tabContent';
            } else {
                tabLinks[id].className = '';
                contentDivs[id].className = 'tabContent hide';
            }
        }
    }

    // Stop the browser following the link/prevent default
    return false;
}
// get a tags
function getTagName( element, tagName ) {
    for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
    }
}
// get  href url with #
function getHash( url ) {
    var hashPos = url.lastIndexOf ( '#' );
    return url.substring( hashPos + 1 );
}

