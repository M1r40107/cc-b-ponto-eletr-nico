const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");

diaSemana.textContent = getWeekDay();
diaMesAno.textContent = getCurrentDate();

const BaterPonto = document.getElementById("btn-bater-ponto");
BaterPonto.addEventListener("click", register);

const DialogPonto = document.getElementById("dialog-ponto");

const fecharDialog = document.getElementById("btn-dialog-fechar")
fecharDialog = addEventListener("click", () => {
    DialogPonto.close()
});

function register() {
    dialogPonto.showModal();
}

function getWeekDay(){
    const date = new Date();
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return days[date.getDay()];  
}

function getCurrentDate() {
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

setInterval(printCurrentHour, 1000);