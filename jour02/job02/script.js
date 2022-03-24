window.addEventListener("DOMContentLoaded", () => {
   let citations = document.querySelector('article');
   let button = document.querySelector('#button');

   button.addEventListener("click", showhide);

   function showhide() {
      if(citations.style.display == 'block')
      citations.style.display = 'none';

      else {
         citations.style.display = 'block';
      }
   }
});