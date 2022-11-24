let contador = 0;
let padre = document.createElement("img");
function añadirElemento(elemento, max) {
  $.ajax({
    type: 'get',
    url: '/practica.html',
    success: function (data) {
      if (contador < max) {

        const nuevoElemento = document.createElement("button");
        const imagen = document.createElement("img");
        imagen.src = "/recursos/e1/" + elemento + "Flecha.png";
        nuevoElemento.style.display = "block";
        imagen.id = elemento;
        if (elemento == "decision") {
          imagen.height = "120";
          imagen.width = "180";
          imagen.style.position = "relative";
          imagen.style.left = "22%";
          imagen.style.margin = "0px";
        } else {
          imagen.style.position = "relative";
          imagen.style.left = "50%";
          imagen.height = "80";
          imagen.width = "130";
        }
        if (padre.id == "decision") {
          imagen.style.left = "calc(" + imagen.style.left + " - 65%)";
          imagen.id = "decisionIzq";

        }
        if (padre.id == "decisionIzq") {
          imagen.id = "decisionIzq2";
          imagen.style.position = "absolute";
          imagen.style.top = "40%";
          imagen.style.left = "calc(" + imagen.style.left + " + 8%)";
        }
        if (padre.id == "decisionIzq2") {
          imagen.style.position = "absolute";
          imagen.style.top = "50%";
          imagen.style.left = "calc(" + imagen.style.left + " + 8%)";
        }
        padre = imagen;

        nuevoElemento.appendChild(imagen);
        document.getElementById('r1').appendChild(nuevoElemento);
        contador++;

      }


    },
    error: function (data) {
      console.log('error');

    }
  });
}

function verificarEjercicio() {
  if (document.getElementById('r1').innerHTML == `<button style="display: block;"><img src="/recursos/e1/inicioFlecha.png" id="inicio" height="80" width="130" style="position: relative; left: 50%;"></button><button style="display: block;"><img src="/recursos/e1/ingresoFlecha.png" id="ingreso" height="80" width="130" style="position: relative; left: 50%;"></button><button style="display: block;"><img src="/recursos/e1/decisionFlecha.png" id="decision" height="120" width="180" style="position: relative; left: 22%; margin: 0px;"></button><button style="display: block;"><img src="/recursos/e1/finFlecha.png" id="decisionIzq" height="80" width="130" style="position: relative; left: calc(-15%);"></button><button style="display: block;"><img src="/recursos/e1/e2-printFlecha.png" id="decisionIzq2" height="80" width="130" style="position: absolute; left: calc(58%); top: 40%;"></button><button style="display: block;"><img src="/recursos/e1/finFlecha.png" id="fin" height="80" width="130" style="position: absolute; left: calc(58%); top: 50%;"></button>` || document.getElementById('r1').innerHTML == `<button style="display: block;"><img src="/recursos/e1/inicioFlecha.png" id="inicio" height="80" width="130" style="position: relative; left: 50%;"></button><button style="display: block;"><img src="/recursos/e1/ingresoFlecha.png" id="ingreso" height="80" width="130" style="position: relative; left: 50%;"></button><button style="display: block;"><img src="/recursos/e1/procesoFlecha.png" id="proceso" height="80" width="130" style="position: relative; left: 50%;"></button><button style="display: block;"><img src="/recursos/e1/printFlecha.png" id="print" height="80" width="130" style="position: relative; left: 50%;"></button><button style="display: block;"><img src="/recursos/e1/finFlecha.png" id="fin" height="80" width="130" style="position: relative; left: 50%;"></button>`) {
    Swal.fire({
      icon: 'success',
      title: 'Correcto',
      text: 'Felicidades!'
    })
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Algo esta mal...'
    })
  }
}

function elegirTema(tema) {
  $.ajax({
    type: 'get',
    url: '/index.html',
    success: function (data) {



    },
    error: function (data) {
      console.log('error');

    }
  });
}

function infoElemento(elemento) {
  switch (elemento) {
    case "terminal":
      Swal.fire({
        title: 'Terminal',
        text: 'Indica el inicio o fin de un programa o subproceso.',
        imageUrl: '/recursos/terminal.png',
        imageWidth: 300,
        imageHeight: 150,
        imageAlt: 'Terminal',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "print":
      Swal.fire({
        title: 'Salida/Impresión',
        text: 'Indica el proceso de hacer salir datos, en la forma de mostrar resultados.',
        imageUrl: '/recursos/print.png',
        imageWidth: 300,
        imageHeight: 150,
        imageAlt: 'Terminal',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "proceso":
      Swal.fire({
        title: 'Proceso',
        text: 'Representa un conjunto de operaciones que cambian el valor, forma o ubicación de datos.',
        imageUrl: '/recursos/proceso.png',
        imageWidth: 300,
        imageHeight: 150,
        imageAlt: 'Terminal',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "decision":
      Swal.fire({
        title: 'Decisión',
        text: 'Muestra una operación condicional que determina cuál de los dos caminos tomará el programa.',
        imageUrl: '/recursos/decision.png',
        imageWidth: 230,
        imageHeight: 200,
        imageAlt: 'Terminal',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "entrada":
      Swal.fire({
        title: 'Entrada/Ingreso',
        text: 'Indica el proceso de hacer entrar datos en la forma de ingresar datos.',
        imageUrl: '/recursos/entrada.png',
        imageWidth: 300,
        imageHeight: 150,
        imageAlt: 'Terminal',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-tr":
      Swal.fire({
        title: 'Ejemplo: Llenar una zanja con un montón de arena',
        text: `Algoritmo: tome una pala y empiece a echar
                arena en la zanja. Cuando se llene la zanja
                deténgase. Se está seguro que en algún
                momento parará, aunque no se sabe cuánto
                tardará.`,
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-gen":
      Swal.fire({
        title: 'Ejemplo: Indique la forma de marcar un número de teléfono.',
        html: "Incorrecto: si la solución del algoritmo sirve para marcar solamente el número 4220234, solo tendrá valor para ese número. <br>Correcto: si la solución es un método para marcar cualquier número, entonces es útil.",
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-am":
      Swal.fire({
        title: 'Ejemplo: Indique la forma de condimentar una salsa.',
        html: `Incorrecto: ponerle algunas especies a la
                salsa.<br>
                Correcto: ponerle sal, pimienta y orégano a la
                salsa.`,
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-len":
      Swal.fire({
        imageUrl: '/recursos/ej-len.png',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Lenguaje Normal',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-pse":
      Swal.fire({
        imageUrl: '/recursos/ej-pse.png',
        imageWidth: 500,
        imageHeight: 250,
        imageAlt: 'Pseudocódigo',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-diag":
      Swal.fire({
        imageUrl: '/recursos/ej-diag.png',
        imageWidth: 300,
        imageHeight: 500,
        imageAlt: 'Código Java',
        background: '#29435a',
        color: '#fff'
      })
      break;
    case "ejemplo-cod":
      Swal.fire({
        imageUrl: '/recursos/ej-cod.png',
        imageWidth: 520,
        imageHeight: 250,
        imageAlt: 'Código Java',
        background: '#29435a',
        color: '#fff'
      })
      break;
  }

}