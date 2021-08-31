/* asignando las variables del DOM */
const div = document.querySelectorAll("#texto");
const inputs = document.getElementById("inputs");
const mensaje = document.getElementById("mensaje");
const segundos = document.getElementById("segundos");
const color = document.getElementById("color");
const animacion = document.querySelectorAll(".rueda");

function inputMensaje(mensaje = "texto de prueba") {
  for (d of div) {
    d.innerText = mensaje;
  }
}

function inputVelocidad(velocidad) {
  for (a of animacion) {
    a.style.animationDuration = `${velocidad}s`;
  }
  /* console.log(`${velocidad}s`) */
}

inputs.addEventListener("input", () => {
  /* simplificando las variables */
  let m = mensaje.value;
  /* segundos =segundos.valueAsNumber*100/500*/
  let s = (segundos.valueAsNumber * 100) / 500;
  let c = color.value;
  
  /* comprobando si el input-mensaje esta vacio */
  m ? inputMensaje(m) : inputMensaje();
  
  /* asignando la velocidad de la animacion */
  inputVelocidad(s);
  
  /* cambiando el la variable de color de texto en root */
  document.documentElement.style.setProperty("--color-texto", c);
});

/* llamada inicial de la web */
window.addEventListener("DOMContentLoaded", () => {
  segundos.value = 25;
  inputMensaje();
});
