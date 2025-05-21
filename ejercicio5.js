let horas = 0;
let minutos = 0;
let segundos = 0;
let timerId;
const iniciarCronómetro = () => {
  if (timerId) return;
  timerId = setInterval(() => {
    segundos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    let hora = horas;
    let minuto = minutos;
    let segundo = segundos;

    if (horas < 10) {
      hora = "0" + horas;
    }
    if (minutos < 10) {
      minuto = "0" + minutos;
    }
    if (segundos < 10) {
      segundo = "0" + segundos;
    }

    const Cronómetro = document.querySelector(".fs-1");
    Cronómetro.textContent = `${hora} : ${minuto} : ${segundo}`;
  }, 1000);
};

const pausarCronómetro = () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
};
const reiniciarCronómetro = () => {
  location.reload();
};

const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");
btnIniciar.addEventListener("click", iniciarCronómetro);
btnPausar.addEventListener("click", pausarCronómetro);
btnReiniciar.addEventListener("click", reiniciarCronómetro);
