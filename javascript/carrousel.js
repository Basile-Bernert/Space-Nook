let img = document.querySelector(".carrousel img")
let numéroImg = 0

let sourcesImg = [
    "../images/animal-after.png",
    "../images/arbre_nature.png",
    "../images/humain_nuage.png",
    "../images/montgolfière.png",
    "../images/Z.png",
    "../images/arbre.jpg",
]

let defilerAutomatiquement = true



let indicateurs = document.querySelector(".indicateurs")
for(let i = 0 ; i<=(sourcesImg.length-1) ; i++){
    // on crée une div
    let divIndicateur = document.createElement("div")
    // on lui donne une classe
    divIndicateur.classList.add("indicateur")
    // on lui ajoute un écouteur d'événement
    divIndicateur.addEventListener("click", function(){
        // on change la source de l'image
        img.src = sourcesImg[i]
        numéroImg = i
        document.querySelector(".indicateur.selectionne").classList.remove("selectionne")
        divIndicateur.classList.add("selectionne")
        
    })
    // on l'ajoute à indicateurs
    indicateurs.appendChild(divIndicateur)
}

 document.querySelectorAll(".indicateur")[numéroImg].classList.add("selectionne")



function changeImage() {
    img.src = sourcesImg[numéroImg]

    document.querySelector(".indicateur.selectionne").classList.remove("selectionne")
    let liste_des_indicateurs = document.querySelectorAll(".indicateur")
    liste_des_indicateurs[numéroImg].classList.add("selectionne")
    
}

document.querySelector(".left-arrow").addEventListener("click", function () {
    defilerAutomatiquement = false
    if (numéroImg > 0) {
        numéroImg--;
    } else {
        numéroImg = sourcesImg.length - 1;
    }
    changeImage();
     setTimeout(function(){
        defilerAutomatiquement = true
    }, 5000)
    
});

function defilerADroite(){
    if (numéroImg < sourcesImg.length - 1) {
        numéroImg++;
    } else {
        numéroImg = 0;
    }
    changeImage();
}

document.querySelector(".right-arrow").addEventListener("click", function () {
    defilerAutomatiquement = false
    setTimeout(function(){
        defilerAutomatiquement = true
    }, 5000)
    defilerADroite()
});

// setTimeout(changeImage, 3000)

let intervalId = setInterval(function(){
    if(defilerAutomatiquement){
        defilerADroite()
    }
}, 2000)