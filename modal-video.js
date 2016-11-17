/**
 * Created by danne on 17/11/2016.
 */

var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

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

/*
function toggleVideo(state) {
    var div = document.getElementById("modal-content");
    var iframe = modal.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '",args":""}','*');
}
*/


