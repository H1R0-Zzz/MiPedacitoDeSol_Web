const carta=`Mi amor...

Hoy cumplimos 1 año y 3 meses juntos. ❤️

Quiero que sepas que cada momento que hemos compartido significa muchísimo para mí.

Tal vez hoy no pueda darte un regalo comprado, pero quise hacerte algo con mis propias manos.

Cada línea de este programa la hice pensando en ti.

Gracias por estar conmigo, por cada sonrisa, cada conversación y cada momento que hemos vivido.

Espero que podamos seguir escribiendo nuestra historia juntos.

Te amo muchísimo. ❤️`;

const mensajeFinal=`Mi amor...

Hoy cumplimos 1 año y 3 meses juntos. ❤️

Quiero agradecerte por cada momento, cada sonrisa y cada recuerdo que hemos creado.

Este pequeño regalo no tiene un precio, pero tiene algo mucho más importante: lo hice pensando en ti.

Cada parte de este pequeño programa la hice pensando en nosotros.

Espero que podamos seguir escribiendo nuestra historia juntos.

Y si tuviera que elegir otra vez, te elegiría a ti. ❤️

Te amo muchísimo. ❤️`;

let timerCarta=null,timerFinal=null,timerCorazones=null;

function mostrar(id){document.querySelectorAll(".pantalla").forEach(p=>p.classList.remove("activa"));document.getElementById(id).classList.add("activa");window.scrollTo({top:0,behavior:"smooth"})}

function escribirCarta(){if(timerCarta)clearInterval(timerCarta);const area=document.getElementById("textoCarta");area.textContent="";let p=0;timerCarta=setInterval(()=>{if(p<carta.length){area.textContent+=carta.charAt(p++);area.scrollTop=area.scrollHeight}else{clearInterval(timerCarta);timerCarta=null}},45)}

function desbloquear(){const clave=document.getElementById("clave").value.trim(),r=document.getElementById("respuesta");if(clave==="07112024"){r.textContent="❤️ ¡Correcto! Has desbloqueado mi mensaje.";r.style.color="#900";setTimeout(()=>mostrar("final"),900)}else{r.textContent="💔 Esa no es la contraseña... intenta nuevamente.";r.style.color="#7b1b1b"}}

function abrirCorazon(){if(timerFinal)clearInterval(timerFinal);if(timerCorazones)clearInterval(timerCorazones);const area=document.getElementById("textoFinal"),titulo=document.getElementById("tituloFinal");area.textContent="";let p=0,paso=0;timerCorazones=setInterval(()=>{const c=["❤️","💖","💕","💗"];titulo.textContent=`${c[paso]} PARA EL AMOR DE MI VIDA ${c[paso]}`;paso=(paso+1)%c.length},350);timerFinal=setInterval(()=>{if(p<mensajeFinal.length){area.textContent+=mensajeFinal.charAt(p++);area.scrollTop=area.scrollHeight}else{clearInterval(timerFinal);clearInterval(timerCorazones);timerFinal=null;timerCorazones=null;titulo.textContent="❤️ PARA EL AMOR DE MI VIDA ❤️"}},45)}

function crearCorazon(){const c=document.createElement("div");c.className="corazon-flotante";c.textContent=["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];c.style.left=Math.random()*100+"vw";c.style.fontSize=(18+Math.random()*25)+"px";c.style.animationDuration=(3+Math.random()*3)+"s";document.getElementById("hearts").appendChild(c);setTimeout(()=>c.remove(),6500)}
setInterval(crearCorazon,900);
document.getElementById("clave").addEventListener("keydown",e=>{if(e.key==="Enter")desbloquear()});
