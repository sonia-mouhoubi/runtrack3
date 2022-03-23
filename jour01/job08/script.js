function sommenombrespremiers(nbr1, nbr2) {
   let value1 = true;
   let value2 = true;

   for(let i = 2; i < nbr1; i++) {
      if(nbr1%i === 0) {
         value1 = false;
      }
   }
   for(let y = 2; y < nbr2; y++) {
      if(nbr2%y === 0) {
         value2 = false;
      }
   }

   if(value1 == true && value2 == true) {
      return nbr1 + nbr2;
   }
   else {
      return false;
   }
}
console.log(sommenombrespremiers(3, 7));


