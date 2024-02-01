// function Redirect() {
//     window.location = "https://www.youtube.com/watch?v=VxVj4LvdohM";
// }

// function Redirect() {
//     window.location = "https://www.youtube.com/watch?v=VxVj4LvdohM";
// }
// document.write("You will redirect in ten seconds!")
// setTimeout('Redirect()', 10000)


function getConfirmation() {
    var retVal = confirm("Do you want to continue?");
    if (retVal == true) {
        window.location = "https://www.youtube.com/watch?v=m79lm45RAC8";
        return true;
    }
    else {
        window.location = "https://mail.google.com/mail/u/0/#inbox";
        return false;
    }
}