let currPassword = ""
let lastPassword = "abcd"

function generatePassword() {
    lastPassword = currPassword
    document.getElementById("lastPassword").innerText = lastPassword
    currPassword = ""

    let s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * s.length + 1);

        currPassword += s.charAt(char)
    }
    document.getElementById("inputs").value = currPassword
}

function copyText() {
    navigator.clipboard.writeText(currPassword);
    alert("Copied the text: " + currPassword);
}