let codigo = document.querySelector("#numSeguimiento");

codigo.addEventListener("input", validarCodigo);

function validarCodigo() {
    
    let codigo = document.querySelector("#numSeguimiento");
    let msnError = document.querySelector(".codigoError");

    if(!codigo.value.trim()){
        codigo.classList.add("errorInput");
        codigo.classList.remove("validoInput");
        msnError.textContent="Debe rellenar éste campo";
        return false;
    } else if(!/^['USDP']\d{10}$/.test(codigo.value)){
        codigo.classList.add("errorInput");
        codigo.classList.remove("validoInput");
        msnError.textContent="El código debe comenzar por USDP seguido de 10 números";
        return false;
    } else{
        codigo.classList.add("validoInput");
        codigo.classList.remove("errorInput");
        msnError.textContent="";
        return true;
    }

}