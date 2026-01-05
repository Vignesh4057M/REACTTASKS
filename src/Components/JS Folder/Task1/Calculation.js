function calculate(operation) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = 0;

    if (operation === 'add') {
        result = n1 + n2;
    } 
    else if (operation === 'sub') {
        result = n1 - n2;
    } 
    else if (operation === 'mul') {
        result = n1 * n2;
    } 
    else if (operation === 'div') {
        result = n2 !== 0 ? (n1 / n2) : "Cannot divide by zero";
    }

    document.getElementById("result").innerText = result;
}