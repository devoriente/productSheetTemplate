//J'initialise le panier
let panier = 0;
//Je sélectionne et stocke les vignettes
const vignettes = document.querySelectorAll('.small');
console.log(vignettes);
//Je sélectionne et stocke l'image grand format
const fullImg = document.getElementById('full');
console.log(fullImg);
//Je sélectionne et stocke la DIV panier-container
const panierContainer = document.querySelector('.panier-container');
console.log(panierContainer);
//J'affiche une vignette grand format
vignettes.forEach((item)=>{
    console.log(item, 'ce message apparait pour chaque item du tableau');
    item.addEventListener('click', function(){
        //console.log(item, 'vignette cliquée');
        let imgSource = item.getAttribute('src');
        console.log(imgSource);
        //J'attribue la nouvelle url à l'image grand format
        fullImg.setAttribute('src', imgSource);
    });
}); //Fermeture de la forEach

//Je sélectionne et stocke le bouton
const btn = document.querySelector('.btn-add');
//J'ajoute un événement au clic
btn.addEventListener('click', function(){
    console.log('bouton cliqué');
    //J'ajoute 1 au panier
    panier = panier + 1;//incrémentation
    console.log(panier);
    //J'affiche le contenu
    panierContainer.innerText = "Vous avez" + " " + panier + " " + "un produit dans votre panier.";

    //J'affiche le contenu
    if(panier < 2) {
        panierContainer.innerHTML = "Vous avez" + " " + panier + " " + "produit dans votre panier.";
    }else{
        panierContainer.innerHTML = "Vous avez" + " " + panier + " " + "produits dans votre panier.";
    }
});