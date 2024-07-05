let flechas = document.querySelector("#flechasTexto");
let bandera = false; //Siempre arranca en false porque al cargar la página la imagen no aparece

flechas.addEventListener("click", function(){
    
    let imagen = document.querySelector(".fotoTarifas");

    if(bandera){
        imagen.src = "";
        bandera = false;
    } else{
        imagen.src="img/Nacional.png";
        bandera = true;
    }

});