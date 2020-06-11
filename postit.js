class Postit {
    positionX;
    positionY;
    largeur;
    hauteur;
    couleurFond;
    couleurTexte;
    texte;

constructor(positionX, positionY, largeur, hauteur, couleurFond, couleurTexte, texte;)
    this.positionX = positionX;
    this.position_Y = positionY;
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.couleur_fond = couleurFond;
    this.couleur_texte = couleurTexte;
    this.texte = texte;
}

affichePost(){
    let monElem = document.createElement('div')
    monElem.style.width = this.largeur+'px'
    monElem.style.height = this.hauteur+'px'
    monElem.style.position = fixed
    monElem.style.left = this.positionX+'px'
    monElem.style.top = this.positionY+'px'
    monElem.style.backgroundColor = this.couleurFond
    monElem.style.color = this.couleurTexte
    
    document.getElementByID('content').appendChild(monElem)

}

