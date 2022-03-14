function afficherjourssemaines()
{
   let joursDeLaSemaine = [
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
        'dimanche'
   ]

   for(let i = 0; i<joursDeLaSemaine.length; i++) {
       const jours = joursDeLaSemaine[i];
    console.log(jours);
   }
}

afficherjourssemaines();