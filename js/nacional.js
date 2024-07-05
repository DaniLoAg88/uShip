let flechas = document.querySelector("#flechasTexto");
let bandera = true; //Siempre arranca en true porque al cargar la página los párrafos tienen contenido

flechas.addEventListener("click", function(){
    
    let parrafo1 = document.querySelector("#parrafo1");
    let parrafo2 = document.querySelector("#parrafo2");

    // if(!parrafo1 && !parrafo2){
    //     parrafo1.textContent = "Ahora, gracias a los envíos nacionales de uShip, puedes enviar tus paquetes a cualquier punto del país."
    //     parrafo2.textContent = "Consulta nuestras tarifas.";
    // } else{
    //     parrafo1.textContent = "";
    //     parrafo2.textContent = "";
    // }

    if(bandera){
        parrafo1.textContent = "";
        parrafo2.textContent = "";
        bandera = false;
    } else{
        parrafo1.textContent = "Ahora, gracias a los envíos nacionales de uShip, puedes enviar tus paquetes a cualquier punto del país."
        parrafo2.textContent = "Consulta nuestras tarifas.";
        bandera = true;
    }


});