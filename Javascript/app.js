$(document).ready(function(){
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$('.fa-play').show();
$('.fa-pause').hide();

$('.music-card').click(function() {
    triggerMusic($(this));
});

var audio;
function triggerMusic(music_card) {

    audio = null;
    var music_url = music_card.data('music_url')
    audio = new Audio(music_url);
    audio.volume = 1;
    audio.autoplay = false;
    console.log(audio);
    if (audio.paused == false) {
        audio.pause();
        music_card.find('.fa-play').show();
        music_card.find('.fa-pause').hide();
        music_card.removeClass('playing');
    } else {
        audio.play();
        music_card.find('.fa-play').hide();
        music_card.find('.fa-pause').show();
        music_card.addClass('playing');
    }
}

        
        
        
// end file       
});

