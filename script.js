//Page abonnement
var abonnement = document.querySelector('#abonnement');
if (abonnement){
    abonnement.addEventListener('click',function(){
        console.log('Abonnement');
        location.assign('abonnement.html');
    })
}
//Page Formation
var formation = document.querySelector('#formation');
if (abonnement){
    formation.addEventListener('click',function(){
        console.log('Formation');
        location.assign('formation.html');
    })
}
//Récupération des données des clients
var btn = document.querySelector('.btn'); 

if (btn){
    function donnees(){
        var nom = document.querySelector('#nom').value;
        var prenom = document.querySelector('#prenom').value;
        var tel = document.querySelector('#tel').value;
        var nomAb = document.querySelector('#nomAb').value;
        var dateDemande = Date();
        
        console.log('');
        console.log('Nom du client : ' + nom);
        console.log('Prénom du client : ' + prenom);
        console.log('Numéro WhatsApp : ' + tel);
        console.log('Demande du client : ' + nomAb);
        console.log('Date de demande : ' + dateDemande);
    } 
    btn.addEventListener('click', donnees);

}





