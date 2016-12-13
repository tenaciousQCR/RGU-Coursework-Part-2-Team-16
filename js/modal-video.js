/**
 * Created by danne on 17/11/2016.
 */

var modal = document.getElementById('modal-network');
var btn = document.getElementById('img-network');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
};


var video = document.getElementsByTagName("iframe")[0];

span.onclick = function() {
    modal.style.display = "none";
    video.setAttribute("src",video.getAttribute("src"));
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.setAttribute("src",video.getAttribute("src"));
    }
};



