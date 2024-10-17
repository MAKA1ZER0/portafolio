
function light_dark_mode() {
    const light_text = "#D9D3D3";
    const light_bg = "#370C94";
    const dark_text = "#D9D3D3";
    const dark_bg = "#1B0648";

    const body = document.querySelector('body');
    const btnColor = document.getElementById('btnColor');

    if (btnColor.checked) {
        body.style.color = light_text;
        body.style.backgroundColor = light_bg;
    } 
    
    else {
        body.style.color = dark_text;
        body.style.backgroundColor = dark_bg;
    }
}

const btnColor = document.getElementById('btnColor');

btnColor.addEventListener('change', light_dark_mode);

function typeWriter(text, elementId, delay = 100) {
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById(elementId).textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }

    type();
}

window.onload = function() {
    const titleText = "Bienvenidos a Mi Primera Pagina Web";
    typeWriter(titleText, 'typewriter-title', 200);
};


function countVisits() {

    if (localStorage.getItem('pageVisits')) {
    
        let visits = parseInt(localStorage.getItem('pageVisits'), 10);
        visits++;
        localStorage.setItem('pageVisits', visits);
        document.getElementById('visit-count').textContent = "Visitas: " + visits;
    } else {

        localStorage.setItem('pageVisits', 1);
        document.getElementById('visit-count').textContent = "Visitas: 1";
    }
}



function startClock() {
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        const timeString = hours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
        document.getElementById('clock').textContent = timeString;
    }

    setInterval(updateTime, 100);
    updateTime();
}

window.addEventListener("load", startClock);
window.addEventListener("load", countVisits);
