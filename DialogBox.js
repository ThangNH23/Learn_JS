// function Warn() {
//     document.write("This is a warning message!");
//     alert("Warning!!!");
// }

function Option() {
    var retVal = confirm("Do you want to continue?");
    if (retVal === true) {
        document.write("User want to continue!");
        return true;
    }
    else {
        document.write("User don't want to continue!");
        return false;
    }
}