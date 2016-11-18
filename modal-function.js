/**
 * Created by danne on 17/11/2016.
 */

/*
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var btn = modal.getElementsByClassName('video-link')[0];
    var span = modal.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = "block";
    };
};
*/

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    var video = modal.getElementsByTagName('iframe')[0];
    var span = modal.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = "none";
        video.setAttribute("src",video.getAttribute("src"));
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            video.setAttribute("src",video.getAttribute("src"));
        }
    }

}


/*
var img = document.getElementsByClassName('video-link');
var i;

for (i = 0; i < img.length; i++) {
    img[i].onload = function() {
        this.nextElementSibling.classList.style.display = "none";
    }
}
*/


/*
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
*/