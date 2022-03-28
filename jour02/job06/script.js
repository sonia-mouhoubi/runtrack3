window.addEventListener("DOMContentLoaded", () => {
   //Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
   var codeKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

   compteur = 0;
   document.addEventListener("keydown", function (e) {
      if (e.key === codeKonami[compteur++]) {
         if (compteur === codeKonami.length) {

            let body = document.querySelector('body');
            body.style.backgroundColor = "#336699";

            let headerInBody = document.createElement('header');
            body.appendChild(headerInBody); // Pr créer le header dans le body

            let header = document.querySelector('header');
            header.style.height = '20vh';
            header.style.backgroundColor = '#c40870';

            let imgInBody = document.createElement('img');
            imgInBody.src = 'logo.png';
            header.appendChild(imgInBody);

            let img = document.querySelector('img');
            img.style.height = '80%';
            img.style.width = 'auto';

            compteur = 0;
            return false;
         }
      }
      else {
         compteur = 0;
      }
   });
});