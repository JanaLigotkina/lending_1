let videoPl = document.getElementById('story-video'),
    playButton = document.getElementById('playButton');

playButton.addEventListener('click', function () {
    document.getElementById('playButton').style.display = 'none';
    videoPl.setAttribute("controls", "controls");

    setTimeout(function () {
        videoPl.play();
    }, 60);
});

videoPl.addEventListener('click',function(){
    setTimeout(function () {
        videoPl.pause();
    }, 60);
});