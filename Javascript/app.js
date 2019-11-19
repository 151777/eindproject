var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var audio = new Audio('http://zuniq.epizy.com/Hardest%20beat.mp3');
        audio.volume = 1;
        audio.autoplay = false;

        $(document).ready(function(){
        $('.trigger').click(function() {
        if (audio.paused == false) {
        audio.pause();
        $('.fa-play').show();
        $('.fa-pause').hide();
        $('.music-card').removeClass('playing');
        } else {
        audio.play();
        $('.fa-pause').show();
        $('.fa-play').hide();
        $('.music-card').addClass('playing');
        }
        });
        });

