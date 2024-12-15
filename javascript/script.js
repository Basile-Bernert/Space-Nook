let cookies_autorisés = true

let tableau_cookies = []

let cookies = document.cookie.split("; ") // ["langue_sélectionnée=Allemand", "thème=sombre"]

for(let i = 0; i < cookies.length ; i = i + 1){
    let cookie = cookies[i].split("=")
    tableau_cookies.push(cookie) // met le cookie dans le tableau de cookies
}

function valeurDuCookie(nomDuCookie){ // fonction qui retourne la valeur d'un cookie
    for(let i = 0; i < tableau_cookies.length; i++){
        if(tableau_cookies[i][0] == nomDuCookie ){ // test si le nom du cookie est égal au nom du cookie qu'on cherche
            return tableau_cookies[i][1] // si oui, on retourne la valeur du cookie
        }
    }
}




if( valeurDuCookie("thème") == "sombre"){
    document.querySelector("body").classList.add('Sombre')
    document.querySelector("body").classList.remove('Clair')
    document.querySelector(".logo-site").src="logo_blanc_sans_fond.png"

}else{

    document.querySelector("body").classList.add('Clair')
    document.querySelector("body").classList.remove('Sombre')
}


let tableau_a = document.querySelectorAll(".prenom-desc")

for(let i = 0; i < tableau_a.length; i++){
    tableau_a[i].addEventListener("click", function(){
        if(document.querySelector(".encadre") != null){
            document.querySelector(".encadre").classList.remove("encadre")
        }
        let id = tableau_a[i].getAttribute("href")
        document.querySelector(id).classList.add("encadre")
    })
}
