window.addEventListener("DOMContentLoaded", () => {
   let textarea = document.querySelector('#keylogger');

   document.addEventListener('keydown',function(event) {
      let textareaLettre = textarea.value;
      let lettre = event.key;
      textarea.value =  textareaLettre + lettre ;
   });
   
});