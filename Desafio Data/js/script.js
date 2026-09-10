// DOM
const dia = document.querySelector('#dia');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const mensagem = document.querySelector('#mensagem');

// EVENTO
setInterval(relogio, 1000);

//Function
function relogio() {
    const hoje = new Date();
    
    d = hoje.getDate();
    me = hoje.getMonth() + 1;
    a = hoje.getFullYear();
    
    t = hoje.getHours();
    m = hoje.getMinutes();
    s = hoje.getSeconds();

    if (t < 10) { t = '0' + t; }
    if (m < 10) { m = '0' + m; }
    if (s < 10) { s = '0' + s; }
    if (d < 10) { d = '0' + d; }
    if (me < 10) { me = '0' + me; }

    let msg = "";
    if (t >= 6 && t < 12) {
        msg = "BOM DIA!!";
    } else if (t >= 12 && t < 18) {
        msg = "BOA TARDE!!";
    } else {
        msg = "BOA NOITE!!";
    }

    horas.textContent = t;
    minutos.textContent = m;
    segundos.textContent = s;
    dia.textContent = d;
    mes.textContent = me;
    ano.textContent = a;
    mensagem.textContent = msg;
}

relogio();
