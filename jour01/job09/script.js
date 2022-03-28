// function tri(numbers, order) {
//    // var numbers = [];
// // console.log(numbers);
//    for (let i = 0; i <= numbers.length; i++) {
//       if(order == 'desc') {
//          let numbers = [numbers[i], numbers[i]+1];
//       }
//       else if(order == 'asc') {
//          let numbers  = [numbers[i], numbers[i]-1];
//       }
//    }
// }

// console.log(tri([1, 7, 8], 'desc'));

function tri(numbers, order) {

   for (let i = 0; i <= numbers.length; i++) {
      for (let j = i + 1; j <= numbers.length; j++) {
         if (numbers[i] > numbers[j]) {
            let enMemoire = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = enMemoire;
         }
      }
   }

   if (order == "asc") {
      console.log(numbers);
   } 
   else if (order == "desc") {
      numbers.reverse();
      console.log(numbers);
   }
 
}
 
 
 tri([12, 8, 7, 22, 3, 48], "desc");
