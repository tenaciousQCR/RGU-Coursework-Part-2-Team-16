/**
 * Created by 1603232 on 25/11/2016.
 */


function hideNav() {
    var item = document.getElementsByClassName("menu-content");
    var i;
    
    for (i = 0; i < item.length; i++) {
        item[i].nextSibling.style.maxWidth = "190px";
    }
}

function showNav() {
    var item = document.getElementsByClassName("menu-content");
    var i;

    for (i = 0; i < item.length; i++) {
        item[i].nextSibling.style.maxWidth = "200px";
    }
}






/*
var search = document.getElementByName("search");

var item = document.getElementsByClassName('menu-content');

var i;


search.onclick = function() {

    for (i = 0; i < item.length; i++) {

        var setClasses = !this.classList.contains('hide');

        setClass(item,'hide','remove');



        if (setClasses) {

            this.classList.toggle("hide");

        }

    }

}



function setClass(els,className,fnName) {

    for (i = 0; i < els.length; i++) {

        els[i].classList[fnName](className);

    }

}
    */