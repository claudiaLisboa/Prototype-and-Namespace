var VEHICULE = VEHICULE || {};

(function(VEHICULE) {

    // Récupère l'objet Auto stocké dans l'objet VEHICULE
    let Auto = VEHICULE.Auto;
    //console.log(Auto);
    //console.log(Auto.prototype);


    /**
     * Création du constructeur Occasion
     */
    let Occasion = function(marque, modele, annee, image, prix, rabais, couleur, nbKm, transmission) {
        // La méthode call() réalise un appel à une fonction avec une valeur this donnée et des arguments fournis individuellement.
        Auto.call(this, marque, modele, annee, image, prix, rabais);
        this.couleur = couleur;
        this.nbKm = nbKm;
        this.transmission = transmission;
    }

    function afficheInfo() {
        this.autoDOM += `
                <div class="auto__colors">
                    <h4 class="auto__color">Couleur :</h4>
                    <div class="auto__color-pellet" style="background-color: ${this.couleur}"></div>
                </div>
                <p class="auto__km">${this.nbKm} km</p>
                <p class="auto__transmission">${this.transmission}</p>
            </div>
        </article>`;
        
        return this.autoDOM;
    }


    /**
     * Pour que Occasion puisse hériter du constructeur de Auto,
     * on doit affecter au prototype de Occasion un pointeur sur le prototype de Auto
     */
    Occasion.prototype = Object.create(Auto.prototype);
    //console.log(Occasion.prototype)

    // Initialise le constructeur de Occasion pour qu'il pointe sur le prototype Occasion
    Occasion.prototype.constructor = Occasion;

    // Ensemble des méthodes publiques dans le prototype de Occasion ajoutées aux méthodes héritées de Auto
    Occasion.prototype.afficheInfo = afficheInfo;


    // Crée et affecte la clé Occasion de l'objet VEHICULE au constructeur Occasion
    VEHICULE.Occasion = Occasion;

})(VEHICULE);