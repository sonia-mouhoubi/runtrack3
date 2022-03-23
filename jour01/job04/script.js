// Une année est bissextile si elle est divisible par 4 et non divisible par 100 ou bien divisible par 400.
function bisextile(annee)
{
    if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;
    else return false;
}
console.log(bisextile(2022));