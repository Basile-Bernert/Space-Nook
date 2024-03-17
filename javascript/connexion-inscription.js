

let input_password = document.querySelector("#input-password")
let input_confirm_password = document.querySelector("#input-confirm-password")
input_password.addEventListener("keyup", passwordok)
input_confirm_password.addEventListener("keyup", passwordok)

function passwordok(){

    console.log(input_password.value)
    if(input_password.value == input_confirm_password.value){

        document.querySelector(".erreur").classList.remove("afficher")
        document.querySelector(".erreur").classList.add("nepasafficher")

    }else{

        document.querySelector(".erreur").classList.remove("nepasafficher")
        document.querySelector(".erreur").classList.add("afficher")

    }

}