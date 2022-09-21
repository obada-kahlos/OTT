

function allLetter(inputtxt) {
    var letters = /^[a-z]*$/i;
    if (!inputtxt.value.match(letters)) {
        alert('Please input letters only');
    }
}