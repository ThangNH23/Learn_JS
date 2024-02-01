function myInfo(name, age) {
    document.write('My name is ' + name + " and I am" + age + "years old")
}

document.write("<br/>")

function firstFunction(first, last) {
    var full;
    full = first + last ;
    return full;
}

function secondFunction() {
    var result ;
    result = firstFunction("Thắng", "Viên");
    document.write(result)
}