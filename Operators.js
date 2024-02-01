var a = 33 ;
var b = 10 ;
var c = "Test" ;
var lineBreak = "<br/>" ;

document.write("33 + 10 = ") ;
result = a + b ;
document.write(result);
document.write(lineBreak);

document.write("33 - 10 = ") ;
result = a - b ;
document.write(result);
document.write(lineBreak);

document.write("33 * 10 = ") ;
result = a * b ;
document.write(result);
document.write(lineBreak);

document.write("33 / 10 = ") ;
result = a / b ;
document.write(result);
document.write(lineBreak);

document.write("33 % 10 = ") ;
result = a % b ;
document.write(result);
document.write(lineBreak);

document.write("33 + 10 + c = ") ;
result = a + b + c ;
document.write(result);
document.write(lineBreak);

document.write("++a = ") ;
result = ++a ;
document.write(result);
document.write(lineBreak);

document.write("--a = ") ;
result = --a ;
document.write(result);
document.write(lineBreak);
document.write(lineBreak);
document.write(lineBreak);


var m = 10 ;
var n = 20 ;
var lineBreak = "<br/>" ;

document.write("(m == n) => ");
resul = (m == n);
document.write(resul) ;
document.write(lineBreak);

document.write("(m > n) => ");
resul = (m > n) ;
document.write(resul) ;
document.write(lineBreak);

document.write("(m < n) => ");
resul = (m < n) ;
document.write(resul) ;
document.write(lineBreak);

document.write("(m !== n) => ");
resul = (m !== n) ;
document.write(resul) ;
document.write(lineBreak);

document.write("(m >= n) => ");
resul = (m >= n) ;
document.write(resul) ;
document.write(lineBreak);

document.write("(m <= n) => ");
resul = (m <= n) ;
document.write(resul) ;
document.write(lineBreak);
document.write(lineBreak);
document.write(lineBreak);



var T = false ;
var V = true ;
var lineBreak = "<br/>" ;

document.write("(T && V) => ");
resul = (T && V) ;
document.write(resul + "  Toán tử And" + " (nếu cả hai biểu thức là true thì sẽ result sẽ là true. Nhưng nếu một trong hai là false thì result sẽ là false)") ;
document.write(lineBreak);

document.write("(T || V) => ");
resul = (T || V) ;
document.write(resul + "  Toán tử Or" + " (nếu cả hai biểu thức là true thì sẽ result sẽ là true. Nhưng nếu cả hai là false thì nó sẽ trả về là false)") ;
document.write(lineBreak);