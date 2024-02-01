// Chuyển hướng trang
// function Redirect() {
//     window.location = "http://www.tutorialspoint.com"
// }

// Set thời gian cho việc chuyển trang
// document.write("you will be redirect in 10 second");
// setTimeout('Redirect()', 10000)

// Hiển thị cảnh báo cho user
// function Warn() {
//     alert("This is a warning message!");
//     document.write("Please consider if you want to click!")
// }

// Hiển thị thông báo để comfirm user có muốn tiếp tục or không 
// function getConfirmation() {
//     var retVal = confirm("Do you want to continue?");
//     if (retVal == true) {
//         window.location = "https://www.youtube.com/watch?v=m79lm45RAC8";
//         return true;
//     }
//     else {
//         window.location = "https://mail.google.com/mail/u/0/#inbox";
//         return false;
//     }
// }

// Nhập tên vào ô prompt
// function getValue() {
//     var retVal = prompt("Enter your name: ", "your name here");
//     document.write("you have entered: ", retVal);
// }

//Xây dựng object
// var life = new Object();
// life.subject = "Happy with your life";
// life.author = "Nguyen Huu Thang";
// life.startDay = "11-10-2003";

// document.write("Book name is: " + life.subject + "<br/>");
// document.write("Book author is: " + life.author + "<br/>");
// document.write("Release date is: " + life.startDay + "<br/>")


function addPrice(amount) {
    this.price = amount;
}

function book(title, author) {
    this.title = title;
    this.author = author;
    this.addPrice = addPrice;
}

var myBook = new book("Happy with your life", "Nguyen Huu thang");
myBook.addPrice(100);

document.write("Tên sách là: " + myBook.title + "<br/>");
document.write("Tác giả là: " + myBook.author + "<br/>");
document.write("Giá sách là: " + myBook.price + "$" + "<br/>");
