function playAudio(language) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioSource = document.getElementById('audioSource');

    // Update audio source based on selected language
    if (language === 'english') {
        audioSource.src = 'english.mp3';
    } else if (language === 'hindi') {
        audioSource.src = 'hindi.mp3';
    } else if (language === 'french') {
        audioSource.src = 'french.mp3';
    } else if (language === 'spanish') {
        audioSource.src = 'spanish.mp3';
    }

    // Load and play the new audio file
    audioPlayer.load();
    audioPlayer.play();
}
