window.addEventListener("DOMContentLoaded", () => {
  let citations = document.querySelector('#citation').textContent;
  let button = document.querySelector('#button');
 
  button.addEventListener("click", citation);

  function citation() {
    console.log(citations);
  }
 });