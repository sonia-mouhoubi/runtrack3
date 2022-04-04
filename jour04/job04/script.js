'use strict';
document.addEventListener('DOMContentLoaded', function loader(){
    //On récupere le tbody et le button 
    let tbody = document.querySelector('tbody');
    let button = document.querySelector('button');
    fetchInfosUser(); // Fonction pr executerle update
    function fetchInfosUser() {
        tbody.innerHTML = ""
        //On récupère le fichier de la requete en base de donnée
        fetch("user.php")
            .then((response) => response.json())
            .then((response) => {
                let data = response
                for(let element of data){ // FOR pr récupérer la data(infos)
                let tr = document.createElement('tr');
                let tdNom = document.createElement('td');
                let tdPrenom = document.createElement('td');
                let tdEmail= document.createElement('td');
                // On recupere les tr et td et on les assigne au element recuperé du json()
                tdNom.innerHTML = element.nom
                tdPrenom.innerHTML = element.prenom
                tdEmail.innerHTML = element.email 
                // On insert les tr et td dans le tbody
                tbody.appendChild(tr) ;
                tr.appendChild(tdNom) ;
                tr.appendChild(tdPrenom) ;
                tr.appendChild(tdEmail) ;
                }
            })
            .catch(function(error){
            console.log(error)
        }) 

    }

    button.addEventListener('click', fetchInfosUser)

})