//Buscamos el elemento animado en el DOM.
window.onload = function() {
   elFondo=document.getElementById("fondoCoche");
}
//parar la animación: propiedad animation-play-state: paused;
function parar() {
        elFondo.style.animationPlayState="paused"; //W3C
        elFondo.style.WebkitAnimationPlayState="paused"; //Safari y Chrome
        }
//reiniciar la animación: propiedad animation-play-state: running;
function seguir() {
        elFondo.style.animationPlayState="running";
        elFondo.style.WebkitAnimationPlayState="running";
        }
//Cambiar la velocidad: propiedad animation-duration: "num"
function velocidad(num) {
        valor= num+"ms";
        elFondo.style.animationDuration=valor;
        elFondo.style.WebkitAnimationDuration=valor;
        }