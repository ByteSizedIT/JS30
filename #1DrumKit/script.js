function play(e) {
    //console.log(e);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    //console.log(audio);
    if(!audio) return //i.e end function if no audio tag with a data key for the given events keyCode
    audio.currentTime = 0; //rewind audio in case already playing
    //console.log(audio);
    audio.play();
    key.classList.add('playing');
}

function endPlay(e) {
    //console.log(e);
    if(e.propertyName != "transform") return; //end function if transtion being ended is not transform
    //console.log(this);
    this.classList.remove('playing') //removes playing class from the key pressed
}

window.addEventListener('keydown', play);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', endPlay));
