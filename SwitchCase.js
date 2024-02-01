var myName = "Thang" ;
document.write("Entering switch block <br/>");
var lineBreak = "<br/>" ;

switch (myName) {
    case "Thang": {
        document.write("Đẹp trai số 1!");
        break;
    }
    case "Thi": {
        document.write("Đẹp trai số 2");
        break;
    }
    case "Hoan": {
        document.write("Đẹp trai số 3!");
        break;
    }
    case "Khanh": {
        document.write("Khứa này bị gay!");
        break;
    }
};
document.write(lineBreak);

var fruit = "Cam";
switch (fruit) {
    case "Quyt": document.write("No! I don't want this <br/>");
    case "Tao": document.write("No, I also don't want this!");
    case "Cam": document.write("Yes, I Love Orange")
}