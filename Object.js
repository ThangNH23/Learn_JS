var book = new Object();
book.title = "Happy with your life";
book.author = "Nguyen Huu thang";

document.write("Book name is: " + book.title + "<br/>");
document.write("Book author is: " + book.author + "<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


function myInfo(name, age) {
    this.name = name;
    this.age = age;
}

var myRender = new myInfo("Thắng", 20);
document.write("My name is: " + myRender.name + "<br/>");
document.write("My age is: " + myRender.age + "<br/>");