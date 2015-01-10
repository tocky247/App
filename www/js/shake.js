function transiteToShake3(number){
    console.log("降る回数:" + number);    
    window.location.href="shake3.html?" + number;
}

function shake(){
    var input = document.querySelector("#shake");
    var number = Number(input.value);
//    localforage.setItem("shakeNubmer", number, transiteToShake3);
    transiteToShake3(number);
}

