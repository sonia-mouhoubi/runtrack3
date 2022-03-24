window.addEventListener("DOMContentLoaded", () => {
   window.addEventListener("scroll", function () {
      let value = pageYOffset;
      var scrollPourcentage = (value / 4096) * 100;
      console.log(scrollPourcentage);
      if (scrollPourcentage >= 0 && scrollPourcentage <= 9) {
         document.querySelector("footer").style.backgroundColor = 'red';
      }else if (scrollPourcentage >= 10 && scrollPourcentage <= 49) {
         document.querySelector("footer").style.backgroundColor = 'blue';
      } else if (scrollPourcentage >= 50 && scrollPourcentage <= 79) {

         document.querySelector("footer").style.backgroundColor = 'green';
      } else if (scrollPourcentage >= 80) {

         document.querySelector("footer").style.backgroundColor = 'pink';
      }
   });
});