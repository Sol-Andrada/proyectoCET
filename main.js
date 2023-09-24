document.addEventListener('DOMContentLoaded', function(){

const inputEmail = document.querySelector('#email')
const inputNombre = document.querySelector('#nombre')
const inputMensaje = document.querySelector('#mensaje');
const inputFormulario = document.querySelector('#formulario')
const inputCantidad = document.querySelector('#cantidad')
const inputMetodoPago = document.querySelector('#metodoPago')

inputEmail.addEventListener('blur', validar)
inputNombre.addEventListener('blur', validar)
inputMetodoPago.addEventListener('input',validar)
})

function validar(e){
    if(e.target.value.trim() === ''){ 
       mostrarMensaje(`el campo ${e.target.id} es obligatorio`, e.target.parentElement)
       return;
    }
    if(e.target.id === 'email' && !validarEmail (e.target.value)){
        mostrarMensaje(`el email no es valido, ingrese nuevamente`,  e.target.parentElement)
        return;
    }
    
    limpiarAlerta(e.target.parentElement);  
}

function mostrarMensaje(mensaje, referencia){
    limpiarAlerta (referencia);

    const error = document.createElement ('p');
    error.textContent = mensaje;
    error.style.color = 'red';
    error.style.alignContent = 'center';
    error.classList.add('error-msj')
      
    referencia.appendChild (error);
}

function validarEmail (email){ 
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email)
    return resultado;
}

function limpiarAlerta (referencia){
    const alerta = referencia.querySelector('p');
    if (alerta){
        alerta.remove();
    }
}



