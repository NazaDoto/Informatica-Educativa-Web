let contador = 0;
function añadirElemento(elemento) {
    $.ajax({
        type: 'get',
        url: '/practica.html',
        success: function (data) {
            if (contador < 5) {
                const nuevoElemento = document.createElement("button");
                const imagen = document.createElement("img");
                imagen.src = "/recursos/e1/" + elemento + "Flecha.png";
                nuevoElemento.style.display = "block";
                imagen.height = "80";
                imagen.width = "130";
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
    if (document.getElementById('r1').innerHTML == `<button style="display: block;"><img src="/recursos/e1/inicioFlecha.png" height="80" width="130"></button><button style="display: block;"><img src="/recursos/e1/ingresoFlecha.png" height="80" width="130"></button><button style="display: block;"><img src="/recursos/e1/procesoFlecha.png" height="80" width="130"></button><button style="display: block;"><img src="/recursos/e1/printFlecha.png" height="80" width="130"></button><button style="display: block;"><img src="/recursos/e1/finFlecha.png" height="80" width="130"></button>`){
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Felicidades!'
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Algo esta mal...'
          })
    }
}