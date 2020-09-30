const panels = document.querySelectorAll('.panel');

/*console.log(panels)*/

function toggleOpen(e) {
    /*console.log(this);
    console.log(e);*/
    this.classList.toggle('open');
}

function transitionEnd(e) {
    /*console.log(e.propertyName);*/
    /*e.propertyName == 'flex'? ... can't use as some browsers use flex-grow'.*/
    if(e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));

panels.forEach(panel => panel.addEventListener("transitionend", transitionEnd));