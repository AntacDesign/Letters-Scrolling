const div = document.querySelectorAll('#texto')
const inputs = document.getElementById('inputs')
let mensaje = document.getElementById('mensaje')
let segundos = document.getElementById('segundos')
let color = document.getElementById('color')
let animacion = document.querySelectorAll('.rueda')

function inputMensaje(mensaje = 'texto de prueba'){
    for (d of div){
        d.innerText = mensaje
    }
}

function inputVelocidad(velocidad){
    for (a of animacion){
        a.style.animationDuration = `${velocidad}s`
    }
    console.log(`${velocidad}s`)
}
inputs.addEventListener('input',()=>{
    /* segundos =segundos.valueAsNumber*100/500*/
    let m = mensaje.value 
    let s = segundos.valueAsNumber*100/500
    let c = color.value
    m ?
    inputMensaje(m)
    : 
    inputMensaje();
    inputVelocidad(s)
    document.documentElement.style.setProperty('--color-texto', c)
})

window.addEventListener('DOMContentLoaded',()=>{
    segundos.value = 25
    inputMensaje()
});