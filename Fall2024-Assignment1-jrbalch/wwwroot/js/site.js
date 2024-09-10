// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

playStop = 0;
let audio = new Audio('kung.mp3');
function playSong() {
    if (playStop == 0) {
        audio.play();
        playStop = 1;
    }

    else {
        audio.pause();
        playStop = 0;
    }

}
