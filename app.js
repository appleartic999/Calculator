let current = "";
let dotIsPressed = false;

function myFunc(e) {
    const btnPressed = e.target;
    if (btnPressed.className === "number") {
        current += e.target.innerText;
    } else if (btnPressed.className === "dot" && dotIsPressed===false) {
        dotIsPressed = true;
        current += e.target.innerText;
    }
    else if(btnPressed.className==="operator"){
    //    TODO: when operator is pressed...
    }
    document.getElementById('current').textContent = `${current}`;
}

window.addEventListener('click', myFunc);