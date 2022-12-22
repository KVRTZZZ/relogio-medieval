const horas = document.getElementById('horas') as HTMLElement;
const minutos = document.getElementById('minutos') as HTMLElement;
const segundos = document.getElementById('segundos') as HTMLElement;

const relogio = setInterval(() => {
    let data: Date = new Date();
    let hours: number| string = data.getHours();
    let minutes: number| string = data.getMinutes();
    let seconds: number| string = data.getSeconds();
    
    if (hours < 10) hours = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds
    
    
    horas.textContent = String(hours);
    minutos.textContent = String(minutes);
    segundos.textContent = String(seconds);
});