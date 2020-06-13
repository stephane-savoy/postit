class Postit{
    positionX;
    positionY;
    largeur;
    hauteur;
    couleurFond;
    couleurTexte;
    texte;
    id;

constructor(positionX, positionY, largeur, hauteur, couleurFond, couleurTexte, texte, id){
    this.positionX = positionX;
    this.positionY = positionY;
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.couleurFond = couleurFond;
    this.couleurTexte = couleurTexte;
    this.texte = texte;
    this.id = id;
}

affichePostit(){
    let monElem = document.getElementById(this.id);
    if (monElem===null){
        monElem=document.createElement('div')
        monElem.id='this.id';
        }

    monElem.style.left = this.positionX+'px'
    monElem.style.top = this.positionY+'px'
    monElem.style.width = this.largeur+'px'
    monElem.style.height = this.hauteur+'px'
    monElem.style.backgroundColor = this.couleurFond
    monElem.style.color = this.couleurTexte;
    monElem.innerHTML=this.texte;
    monElem.style.position = 'fixed';
    document.getElementById('Postit').appendChild(monElem);
}

BougePostit(newpositionX, newpositionY){  //pour deplacer le post it
        this.positionX = newpositionX
        this.positionY = newpositionY
    }

modifText(newText){
    this.texte = newText
}

redimPostit(newLargeur, newHauteur){
    this.largeur = newLargeur
    this.hauteur = newHauteur
}
}

let monElem = new Postit(275,200,150,150,'yellow','black','Premier Post-it')
monElem.affichePostit()

let monElem2 = new Postit(150,150,100,100,'Fuchsia','black','Deuxième Post-it')
monElem2.BougePostit(130,20)
monElem2.affichePostit()

let monElem3 = new Postit(100,100,100,100,'Orange','black','Troisième Post-it')
monElem3.BougePostit(90,90)
monElem3.modifText('Troisième Post-it')
monElem3.affichePostit()

