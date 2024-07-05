let pass = document.querySelector("#pass");
let email = document.querySelector("#email");
let boton = document.querySelector("#btnLogin");

pass.addEventListener("input", validarPassword);
email.addEventListener("input", validarEmail);
boton.addEventListener("click", validarFormulario);

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

function validarPassword() {

    let pass = document.querySelector("#pass");
    let msnError = document.querySelector(".passError");

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass.value)){
        pass.classList.add("errorInput");
        pass.classList.remove("validoInput");
        msnError.textContent = "La contraseña debe contener mínimo 8 caracteres, 1 mayúscula. 1 minúscula y 1 número";
        return false;
    } else{
        pass.classList.add("validoInput");
        pass.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarFormulario() {
    if(validarPassword() && validarEmail()){
        alert("Login realizado correctamente.");
    } else{
        alert("Por favor, rellene los campos obligatorios marcados con *");
    }
    
}