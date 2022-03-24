window.addEventListener("DOMContentLoaded", () => {
   let compteur = 0;
   let button = document.querySelector('#button');

   button.addEventListener("click", addone);

   function addone() {
      document.querySelector('#compteur').textContent = ++compteur;
   }

});