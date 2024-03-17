/*
console.log(4+4);
let mavariable;
mavariable = 8;
console.log(mavariable);

if(mavariable < 10){
    console.log("Ma variable est inferieure à 10. Elle vaut : " + mavariable + ".")
}else{
    console.log('J\'aime les frites')
}

let i = 0

while (i < 10) {
    console.log(i)
    i = i + 1
    i++
    // i += 2  |  i = i + 2
}

let bouton = document.querySelector('#bouton')
console.log(bouton)
bouton.addEventListener("click", test)

function test() {
    let titre = document.querySelector('h1')

    if(titre.classList.contains('rouge')){
        titre.classList.remove('rouge')
    }else{
        titre.classList.add('rouge')
    }
}

*/

// let theme = window.matchMedia("(prefers-color-scheme: dark)");
// console.log(theme.matches)





let bouton = document.querySelector('#bouton')
bouton.addEventListener("click", changerDeTheme)

let themeClair = true

function changerDeTheme() {
    if(themeClair == true){
        document.querySelector("body").classList.add('Sombre')
        document.querySelector("body").classList.remove('Clair')
        themeClair = false

        if(cookies_autorisés == true){
            document.cookie = "thème=sombre; path=/"
        }
        
    }else{
        document.querySelector("body").classList.add('Clair')
        document.querySelector("body").classList.remove('Sombre')
        themeClair = true

        if(cookies_autorisés == true){
            document.cookie = "thème=clair; path=/"
        }
    }
}




let toggleSwitch = document.querySelector('.switch')
toggleSwitch.addEventListener("click", deplacerLeRond)

function deplacerLeRond(){
    if(toggleSwitch.classList.contains('actif')){
        toggleSwitch.classList.remove('actif')
    }else{
        toggleSwitch.classList.add('actif')
    }
}



if(valeurDuCookie("thème") == "sombre"){
    console.log('test')
    toggleSwitch.classList.add('actif')
    themeClair = false
    document.querySelector("body").classList.add('Sombre')
    document.querySelector("body").classList.remove('Clair')
}



let Langue = document.querySelector("#Langue")
Langue.addEventListener("change", changerDeLangue)

let langue_sélectionnée = "anglais"


function changerDeLangue(){
    langue_sélectionnée = Langue.value
    console.log(langue_sélectionnée)

    
    document.cookie = "langue_sélectionnée=" + langue_sélectionnée
}



// let tableau = [
//     [
//         "Pomme",
//         "Poire",
//         "Banane"
//     ],
//     [
//         "Tomate",
//         "Carotte",
//         "Salade",
//         [
//             "Pomme de terre",
//             "Patate douce"
//         ]
//     ]
    
// ]

// console.log(tableau)

// console.log(tableau.length)

// console.log(tableau[1][3][1])


let frigo = [
    ["Pomme", 1],
    ["Poire", 5],
    ["Banane", 6],
    ["Tomate", 1],
    ["Carotte", 9],
    ["Salade", 9],
    ["Pomme de terre", 2],
    ["Patate douce", 2],
    ["Fraise", 1]
]

// for(let i = frigo.length - 1; i >= 0 ; i = i - 1){
//     console.log(afficherUnElementDuFrigo(i))
// }

function afficherUnElementDuFrigo(element){
    let yauns = "s"
    if(frigo[element][1] == 1){
        yauns = ""
    }else{
        yauns = "s"
    }
    return "j'ai " + frigo[element][1] + " "  + frigo[element][0] + yauns
}


// "langue_sélectionnée=Allemand; thème=sombre"

// [
//     "langue_sélectionnée=Allemand",
//     "thème=sombre"
// ]

// [
//     ["langue_sélectionnée", "Allemand"],
//     ["thème", "clair"],
//     ["cookies_autorisés", "true"]
// ]






let nomDuCookie = "langue_sélectionnée"

console.log("Le cookie qui s'appel " + nomDuCookie + " vaut : " + valeurDuCookie(nomDuCookie))

nomDuCookie = "thème"

console.log("Le cookie qui s'appel " + nomDuCookie + " vaut : " + valeurDuCookie(nomDuCookie))