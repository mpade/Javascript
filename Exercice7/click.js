// Exercice 7 JavaScript

function jourdelasemaine(){


var tab  = new Array('Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche');
var jour = new Date ();

    switch(jour.getDay()){
        case 1 :
            alert("Nous sommes " +" "+ tab[0]);
            break;
        case 2 :
            alert("Nous sommes " +" "+ tab[1]);
            break;
        case 3 :
            alert("Nous sommes"  +" "+ tab[2]);
            break;
        case 4 :
            alert("Nous sommes " +" "+ tab[3]);
            break;
        case 5 : 
            alert("Nous sommes " +" "+ tab[4]);
            break;
        case 6 : 
            alert("Nous sommes " +" "+ tab[5]);
            break;
        case 7 : 
            alert("Nous sommes " +" "+ tab[6]);
            break;
        default :
            alert("Le jour de la semaine est inexistant");
    }alert(jour);
}

//commandes testé ultérieurement...
//alert(jour.getDate());
//alert(jour.getDay());
//const day1 = jour.getDate();