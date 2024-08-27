const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
const BaterPonto = document.getElementById("bater-ponto");

BaterPonto.addEventListener("click", register);
diaSemana.textContent = getWeekDay();
diaMesAno.textContent = getCurrentDate();


function getWeekDay(){
    const date = new Date();
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return days[date.getDay()];  
}

function getCurrentDate() {
    //Alterar a solução para considerar padStart ou Slice
    //Considerar formatos diferentes da data, conforme localização
    //do usuário dd/mm/aaaa, mm/dd/aaaa, aaaa/mm/dd, aaaa.mm.dd
    const date = new Date();
    let month = date.getMonth();
    let day = date.getDay();

    if (day < 10) {
        day = "0" + day 
    }

    if (month < 10 ) {
        month = "0" + (month + 1)
    }

    return day + "/" + month + "/" + date.getFullYear();
}

function getCurrentHour() {
    //Considerar os métodos abaixo para incluir zeros em números < 10
    //padStart()
    //slice()
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour
    }

    if (min < 10) {
        min = "0" + min
    }

    if (seg < 10) {
        seg = "0" + seg
    }

    return hour + ":" + min + ":" + seg;
}

function printCurrentHour() {
    horaMinSeg.textContent = getCurrentHour();
}

function register() {
//Abrir <dialog> ou nom mínimo 4 botões
    alert("Bater Ponto");
}

setInterval(printCurrentHour, 1000);