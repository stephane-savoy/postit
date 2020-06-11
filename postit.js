class Postit 
{
    position_X;
    position_Y;
    largeur;
    hauteur;
    couleur_fond;
    couleur_texte;
    texte;

Postit(position_X, position_Y, largeur, hauteur, couleur_fond, couleur_texte, texte;){

    this.position_X = position_X;
    this.position_Y = position_Y;
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.couleur_fond = couleur_fond;
    this.couleur_texte = couleur_texte;
    this.texte = texte;
}

modifier_texte()
changer_taille()
deplacer()

}

// let monPostit = new Postit()


// {
//     Marque;
//     Modele;
//     Couleur;
//     constructor(marque, modele, couleur) {
//         this.Marque = marque;
//         this.Modele = modele;
//         this.Couleur = couleur;
//     }
//     roule() {
//         return "Vroum vroum";
//     }
//     get Marquea() {
//         return "Voiture de marque " + this.Marque;
//     }
//     set Marquea(laMarque) {
//         this.Marque = laMarque;
//     }
//     get Modelea() {
//         return "Voiture de modele " + this.Modele;
//     }
//     set Modelea(leModele) {
//         this.Modele = leModele
//     }
// }

// let mavoit = new Voiture("Ford", "Focus", "bleu")


// console.log(mavoit.Marque)
// console.log(mavoit.Modele)
// console.log(mavoit.Couleur)
// console.log(mavoit.roule())
// tabVoit = []
// tabVoit.push(new Voiture("Ford", "Focus", "bleu"))
// tabVoit.push(new Voiture("Peugeot", "206", "rouge"))
// tabVoit.push(new Voiture("Renault", "clio", "vert"))
// let monCont = document.getElementById('content')

// let maTable = document.createElement('table')
// maTable.border = 1
// for (let i in tabVoit) {
//     ajoutLigneTable(maTable, tabVoit[i])
// }
// monCont.appendChild(maTable)

// function ajoutLigneTable(table, voit) {
//     let maLigne = document.createElement('tr')
//     let maMarque = document.createElement('td')
//     maMarque.innerHTML = voit.Marque
//     maLigne.appendChild(maMarque)
//     let monModele = document.createElement('td')
//     monModele.innerHTML = voit.Modele
//     maLigne.appendChild(monModele)
//     let maCouleur = document.createElement('td')
//     maCouleur.innerHTML = voit.Couleur
//     maLigne.appendChild(maCouleur)
//     table.appendChild(maLigne)
// }