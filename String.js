// Cách 1 để tạo một chuỗi
var fullName = 'Nguyen Huu Thang là \'siêu nhân\''; 
var slash = 'Đây là dấu \\'; 
document.write(fullName + "<br/>")
document.write(slash + "<br/>")

// => backslash in javaScript

// Cách 2
// var firstName = new String ("Thang")


var myName = "Nguyen Huu Thang";
document.write(myName.length + "<br/>");

var firstName = "Nguyen";
var lastName = "Thang";
document.write("Tên tôi là " + firstName + ' ' + lastName + "<br/>")

var a = "Quảng";
var b = "Bình";
document.write(`Tôi sinh ra ở  ${a} ${b}`);
