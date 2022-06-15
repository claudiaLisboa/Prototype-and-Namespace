var VEHICULE = VEHICULE || {};

(function() {

	/**
	 * Création du constructeur Auto.
	 * Par convention, la première lettre du nom du constructeur est en majuscule.
     * Le constructeur recevra les données communes entre Neuve et Occasion.
	 */
     let Auto = function(marque, modele, annee, image, prix, rabais) {
		this.marque = marque;
		this.modele = modele;
        this.annee = annee;
        this.image = image;
        this.prix = prix;
        this.rabais = rabais;

        if(this.rabais != null) {
            this.prixReduit = this.prix - this.rabais;
        }

        this.autoDOM = `
        <article class="auto">
            <div class="auto__img-wrapper">
                <img src="${this.image}" class="auto__img">
            </div>
            <div class="auto__text-wrapper">
                <h2 class="auto__brand">${this.marque}</h2>
                <h3 class="auto__model">${this.modele}</h3>
                <p class="auto__year">${this.annee}</p>
                ${this.prixReduit ?
                    `<h4 class="auto__price">
                        <span>${this.prixReduit} $</span>
                        <span class="auto__original-price">${this.prix} $</span>
                    </h4>` 
                    :
                    `<h4 class="auto__price">${this.prix} $</h4>`
                }`;
	}

	/**
	 * Ensemble des méthodes publiques dans le prototype de Auto
	 */
    Auto.prototype = {
        constructor: Auto
    }

	// Crée et affecte la clé Auto de l'objet VEHICULE au constructeur Auto
	VEHICULE.Auto = Auto;

})();