function showShakeNumber(number){
    var output = document.querySelector("#shake");
    output.textContent = number;
}

function getShakeNumber(){
    var search = window.location.search;
    var number = Number(search.substr(1, search.length - 1));
    return number;
}

function initializePage(){
    var number = getShakeNumber();
    showShakeNumber(number);
}

window.addEventListener("load", initializePage);