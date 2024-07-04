let boton = document.querySelector("#calcular");

boton.addEventListener("click", function(){

    let tipoEnvio = document.querySelector("#envio").value;
    let pesoEnvio = document.querySelector("#peso").value;

    if(tipoEnvio != "" && pesoEnvio != ""){

        switch (tipoEnvio) {
            case "local":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 4.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 6.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 8.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 11.39€";
                }

                break;
            case "provincial":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 10.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 9.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 11.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 14.39€";
                }

                break;
            case "comunidad":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 10.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 12.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 14.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 17.39€";
                }

                break;
            case "nacional":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 14.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 16.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 18.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 21.39€";
                }

                break;
            case "ceuymeli":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 20.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 22.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 24.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 27.39€";
                }

                break;
            case "balycan":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 18.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 20.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 22.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 25.39€";
                }

                break;
            case "europa":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 22.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 24.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 26.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 29.39€";
                }

                break;
            case "mundo":
                if(pesoEnvio == "0.5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 27.88€";
                }else if(pesoEnvio == "5"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 29.75€";
                }else if(pesoEnvio == "10"){
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 31.49€";
                }else{
                    document.querySelector("#salidaEnvio").textContent = "El precio de tu envío con las opciones seleccionadas es de 34.39€";
                }

                break;
        
            default:
                alert("Se ha producido un error durante el cálculo, disculpe las molestias");
                break;
        }
    } else{
        alert("Debe seleccionar las dos opciones para calcular el coste de su envío");
    }

});