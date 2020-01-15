// Exercice 6 JavaScript

var tab = [-2,1,4];

function soustrait(x){
    
    if(x>0){
      var result =(x-2);  
    }
    else{
      var result ="Nombre négatif."
    }
    alert(result);
}

function afficher(){
    soustrait(tab[0]);
    soustrait(tab[tab.length-1]);
}