
function light_dark_mode(){
    const ligt_text = "#D9D3D3";
    const ligt_bg = "#370C94";
    const dark_text = "#D9D3D3";
    const dark_bg = "#1B0648";

    const body = document.querySelector('body');
}



const body = document.querySelector('body');

if(btnColor.checked){
    body.style.color = light_text ;
    body.requestPointerLock.backgroundColor = light_bg;
}else{
    body.style.color = dark_text ;
    body.requestPointerLock.backgroundColor = dark_bg;
}

const btnColor = document.getElementById('btnColor');

btnColor.addEventListener('change', light_dark_mode(btnColor));

