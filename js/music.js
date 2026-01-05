const audioElements = document.querySelectorAll('main audio');

audioElements.forEach(element => { element.addEventListener('play', (event) => { resetAudioFile(event.target); }); });

// To disable simultaneous playback of audio files.
function resetAudioFile(audio) {
    audioElements.forEach(element => {
        if (element !== audio) {
            element.pause();
            element.currentTime = 0;
        }

        audio.play();
    });
}
