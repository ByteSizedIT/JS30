const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const playBtn = player.querySelector(".player__button");
const progressBar = player.querySelector(".progress");
const progressMade = player.querySelector(".progress__filled");

const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const expand = player.querySelector('.expand');


function togglePlay() {
    video.paused? video.play(): video.pause();
}

function updateBtn() { 
    playBtn.textContent = video.paused? "❚ ❚": "►";
}

function skip() {
    video.currentTime += Number(this.dataset.skip); //this refers to the button pressed as per the eventListener
}

function slide() {
    video[this.name] = parseFloat(this.value);
}

function handleProgress() {
    const percentPlayed = (video.currentTime/video.duration)*100;
    progressMade.style.flexBasis = `${percentPlayed}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX/progressBar.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}

function toggleSize() {
    player.classList.contains("fullscreen")? player.classList.remove("fullscreen"): player.classList.add("fullscreen");
}


/*video.addEventListener("click", togglePlay);*/
playBtn.addEventListener("click", togglePlay);

playBtn.addEventListener("click", updateBtn);
playBtn.addEventListener("click", updateBtn);

skipBtns.forEach(button => button.addEventListener("click", skip));

/*ranges.forEach(range => range.addEventListener("change", slide));*/
ranges.forEach(range => range.addEventListener("mousemove", slide));

video.addEventListener("timeupdate", handleProgress);

progressBar.addEventListener("click", scrub);

progressBar.addEventListener("click", scrub);

let mouseDown = false;
document.addEventListener("mouseup", () => mouseDown = false);
progressBar.addEventListener("mousedown", () => mouseDown = true);
progressBar.addEventListener("mousemove", (e) => mouseDown && scrub(e));

expand.addEventListener("click", toggleSize);