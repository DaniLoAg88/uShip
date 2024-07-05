let foto = document.querySelector("#fotoPaquete");

foto.addEventListener("mouseover",function(){
    foto.classList.add("fotoGrand");
    foto.classList.remove("fotoPeq");
})

foto.addEventListener("mouseout",function(){
    foto.classList.add("fotoPeq");
    foto.classList.remove("fotoGrand");
})