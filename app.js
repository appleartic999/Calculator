let current="";
function myFunc(e){
    const btnPressed=e.target.className;
    if(btnPressed==="number"){
        current+=e.target.innerText;
    }else if(e.target.id==="dot"){}
    document.getElementById('current').textContent=`${current}`;
}
window.addEventListener('click', myFunc);