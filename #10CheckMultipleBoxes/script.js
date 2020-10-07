const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Clear lastChecked if the click event unticked the lastChecked box
    if(lastChecked && !lastChecked.checked) { lastChecked = ""}

    //Check click event checked the box, but didnt uncheck it!
    if(this.checked) {
        // Check if they had the shift key down
        // AND check that they are checking it  
        console.log(this);
        console.log(this.checked);
        console.log(e);
        let inBetween = false;
        if (e.shiftKey && this.checked && lastChecked) {
            // go ahead and do what we please
            // loop over every single checkbox
            checkboxes.forEach(checkbox => {
                console.log(checkbox);
                if (checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                    console.log('Starting to check them in between!');
                }

                if (inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    }
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));