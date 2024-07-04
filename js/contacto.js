let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let boton = document.querySelector("#btnConsulta");

nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
boton.addEventListener("click", validarFormulario);


function validarNombre() {

    let nombre = document.querySelector("#nombre");
    let msnError = document.querySelector(".nombreError");

    if(!nombre.value.trim()){
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "El nombre es obligatorio";
        return false;
    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "Sólo puede contener letras y espacios";
        return false;
    } else{
        nombre.classList.add("validoInput");
        nombre.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarEmail() {
    
    let email = document.querySelector("#email");
    let msnError = document.querySelector(".emailError");

    if(!email.value.trim()){
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent = "El email es obligatorio";
        return false;
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent = "No es un formato de correo electrónico válido";
        return false;
    } else{
        email.classList.add("validoInput");
        email.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarFormulario() {
    if(validarNombre() && validarEmail()){
        alert("Gracias por contactar con uShip, en breves nuestro equipo comercial se pondrá en contacto con usted en el correo electrónico que nos ha facilitado.");
    } else{
        alert("Por favor, rellene los campos obligatorios marcados con *");
    }
    
}