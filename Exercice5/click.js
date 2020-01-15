// Exercice 5 JavaScript
function boucle(){ 
    var tab = Array(3);
    for(i=0; i<3; i++){
    tab[i]=i*i;
    }
    alert(tab);
}

function boucle2(){
    var longueur = prompt("La longueur est de : ");
    var tab = Array(longueur);
    for(i=0; i<longueur; i++){
        tab[i]=i*i;
    }
    alert(tab);
}