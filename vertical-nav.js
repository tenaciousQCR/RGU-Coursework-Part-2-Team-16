/**
 * Created by 1603232 on 07/12/2016.
 */

var acc = document.getElementsByClassName("menu-content");
var panel = document.getElementsByClassName("sub-menu");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc,'active','remove');
        setClass(panel,'show','remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els,className,fnName) {
    for (i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}


function openNav() {
    document.getElementById("navigation").style.width = "250px";
}


function closeNav() {
    document.getElementById("navigation").style.width = "0";
}