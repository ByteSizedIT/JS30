const slideImages = document.querySelectorAll('.slide-in');



function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {
    slideImages.forEach(slideImage => {
        //halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height/2; //i.e. slideInAt = (no of pixels scrolled down + height of visible window on screen) - (height of the image / 2)
        //position of the bottom of image
        const imageBottom = slideImage.offsetTop + slideImage.height; //i.e how far the top of image is from the top of the screen + the height of the image
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            console.log('hello');
            slideImage.classList.add("active");
        }
        else {
            console.log('goodbye');
            slideImage.classList.remove("active");
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));