const fulImgBox = document.getElementById("fulImgBox"), //para que la coma?
fulImg = document.getElementById("fulImg");


//funcion para cambiar el display: nono(es decir, que no se muestre) a display: flex (que muestre en contenido)
function openFulImg(reference){
    fulImgBox.style.display = "flex";

    // reference se refiere a la imagen que va ampliar al momento de darle click
    fulImg.src = reference
}

// funcion para quitar la imagen al momento de darle a la X
function closeImg(){
    fulImgBox.style.display = "none";
}