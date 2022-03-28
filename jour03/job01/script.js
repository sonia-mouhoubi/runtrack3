$(document).ready(function () { // Condition pour faire charger le js après le html et css
    $('#button').on("click", function () { // On récupère l'event au click 
        $('#button').empty(); // On vide le contenu du bouton 
        $('#button').append('le $ est un bon élément monétaire. Le # de twitter est bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.'); // On le remplace par un nouveau contenu
        // $('#button').html('') permet  de faire la même chose que append()
    });

    $('#hide').on("click", function () { // Au click du 2eme bouton 
        $('#button').hide(); // On cache le deuxieme
    });
});