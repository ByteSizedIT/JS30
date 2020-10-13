let loggedKeys = [];

const secretWord = "pompey";

window.addEventListener('keyup', (e) => {
    loggedKeys.push(e.key);
    loggedKeys.splice(-loggedKeys.length-1, loggedKeys.length-secretWord.length);
    if(loggedKeys.join("").includes(secretWord)) {
        console.log("Hurrah");
        cornify_add();
    }
});