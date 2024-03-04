const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;

function resultupdate(){
    if (inputEl.value <=0 || isNaN(inputEl.value)){
        errorEl.innerText= "please enter a valid number!!!"
        clearTimeout(errorTime);
        errorTime= setTimeout(() => {
            errorEl.innerText="";
            inputEl.innerText="";
        }, 2000);
    } else {
        resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() =>{
            resultEl.innerText = "";
            inputEl.value = "";
        }, 10000);
    }
}

inputEl.addEventListener("input", resultupdate);