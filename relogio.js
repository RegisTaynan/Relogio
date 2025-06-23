function atualizarRelogio(){
    let data = new Date()
    let hora = data.getHours().toString().padStart(2, "0"); //tranforma 5 em 05
    let minutos = data.getMinutes().toString().padStart(2, "0");
    let segundos = data.getSeconds().toString().padStart(2, "0");

    document.getElementById("frase").innerHTML = "Hora certa<br>"
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}<br>`
}

function atualizarData(){
    let data = new Date
    let dia = data.getDate()
    let ano = data.getFullYear()
    let mesExtenso = data.toLocaleString("pt-BR", { month: "long"});
    let diaSemana = data.toLocaleString("pt-BR", { weekday: "long"});
    document.getElementById("data").innerHTML = `${diaSemana}, ${dia} de ${mesExtenso} de ${ano}`;
}

//atualiza a pagina a cada segundo
setInterval(atualizarRelogio, 1000); 
//atualiza a data uma vez ao carregar a pagina
atualizarData();
function  MostrarFuso(){
    document.getElementById("PaiFuso").style.display = 'grid';
    document.getElementById("btn-Mostrar").style.display = 'none';
    document.getElementById("btn-Ocultar").style.display = 'inline-block';
}

function OcultarFuso(){
    document.getElementById("PaiFuso").style.display = 'none';
    document.getElementById("btn-Mostrar").style.display = 'inline-block';
    document.getElementById("btn-Ocultar").style.display = 'none';
}
let data = new Date()
let hora = data.getHours().toString().padStart(2, "0"); //tranforma 5 em 05
let minutos = data.getMinutes().toString().padStart(2, "0");
let segundos = data.getSeconds().toString().padStart(2, "0");
let UTCCinco = hora-2
let UTCQuatro = hora-1
let UTCTres = Number(hora)
let UTCDois = hora+1