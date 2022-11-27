let current = "", currentValue = 0, operator = "", result = 0;
let dotIsPressed = false;
let arr = [];//acts as a QUEUE data structure to evaluate values
function evaluate() {
    if (arr.length === 1) {
        currentValue = arr[0];
    } else if (arr.length === 3) {
        if (arr[1] === "+") {
            currentValue += arr[2];
        } else if (arr[1] === "-") {
            currentValue -= arr[2];
        } else if (arr[1] === "x") {
            currentValue *= arr[2];
        } else if (arr[1] === "/") {
            if (arr[2] === 0) {
                alert("Cannot divide by Zero");
            } else {
                currentValue /= arr[2];
            }
        }
    }
    arr = [currentValue, arr[1]];
    return currentValue;
}

function myFunc(e) {
    const btnPressed = e.target;
    if (btnPressed.className === "number") {
        if (operator !== "") {
            arr[1] = operator;
            operator = "";
        }
        if(current===0){
            current="";
        }
        current += btnPressed.innerText;
        document.getElementById('current').innerText = `${current}`;
    } else if (btnPressed.className === "dot" && dotIsPressed === false) {
        current += ".";
        document.getElementById('current').innerText = `${current}`;
        dotIsPressed = true;
    } else if (btnPressed.className === "operator orange") {
        dotIsPressed = false;
        operator = btnPressed.innerText;
        if (btnPressed.id === "percentage") {
            current = (Number(current) / 100).toString();
            document.getElementById('current').innerText = `${current}`;
        } else {
            arr.push(Number(current));
            currentValue = evaluate();
            if (btnPressed.innerText === "=") {
                arr = [];
                document.getElementById('result').innerText = `Ans= ${currentValue}`;
                document.getElementById('current').innerText = "";
            } else if (btnPressed.id === "reset") {
                currentValue = 0;
                arr = [];
                current = "";
                document.getElementById('result').textContent = `0`;
                document.getElementById('current').textContent = "0";
            } else {
                document.getElementById('result').innerText = `${currentValue} ${operator}`;
                document.getElementById('current').innerText = "";
            }
            current = "";
        }
    } else if (btnPressed.id === "backward") {
        current = current.slice(0, -1);
        if (current.length === 0) current = 0;
        document.getElementById('current').innerText = `${current}`;
    } else if (btnPressed.id === "clear") {
        current = "";
        document.getElementById('current').innerText = `0`;
    }
}

window.addEventListener('click', myFunc);