window.addEventListener("DOMContentLoaded", () => {
    let  span_container = document.querySelector('#span_container');
    let nav = document.querySelector('nav');
  

    span_container.addEventListener('click', function () {
        span_container.classList.toggle('active');
        nav.classList.toggle('active');
    });
 
});