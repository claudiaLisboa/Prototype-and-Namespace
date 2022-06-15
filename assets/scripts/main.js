(function(VEHICULE) {

    let listeAutos = document.querySelectorAll('[data-js-list-autos]')[0];

    // Gestionnaire d'événement pour le changement d'option du select
    document.getElementsByTagName("select")[0].addEventListener("change", function(evt) {
        switch(evt.target.value) {
            case "0":
                // Si l'usager n'a selectionné ni "Neuve" ni "Occasion" on efface la liste
                listeAutos.innerHTML = "";
                break;
            case "neuve":
                // On efface la liste avant de la remplir
                listeAutos.innerHTML = "";
                for(let i = 0; i < neuves.length; i++) {
                    let donnees = neuves[i];
                    let auto = new Neuve(donnees[0], donnees[1], donnees[2], donnees[3], donnees[4], donnees[5], donnees[6]);
                    // console.log(auto);
                    listeAutos.innerHTML += auto.afficheInfo();
                }
                break;
            case "occasion":
                // On efface la liste avant de la remplir
                listeAutos.innerHTML = "";
                for(let i = 0; i < occasions.length; i++) {
                    let donnees = occasions[i];
                    let auto = new Occasion(donnees[0], donnees[1], donnees[2], donnees[3], donnees[4], donnees[5], donnees[6], donnees[7], donnees[8]);
                    // console.log(auto);
                    listeAutos.innerHTML += auto.afficheInfo();
                }
                break;
        }
    });

    /* Objets */
    let Neuve = VEHICULE.Neuve,
        Occasion = VEHICULE.Occasion;

    /* Véhicules */
    // neuves    : marque, modele, annee, image, prix, rabais, [couleurs]
    // occasions : marque, modele, annee, image, prix, rabais, couleur, nbKm, transmission

    let neuves = [
        ['Nissan', 'Leaf Plus SV', '2022', './assets/img/neuves/neuve-1.jpeg', 52329, 500, ['darkred', 'Grey', '#000000']],
        ['Kia', 'Rio LX+', '2022', './assets/img/neuves/neuve-2.jpeg', 20220, null, ['#000000', 'darkblue']],
        ['Dodge', 'Challenger', '2021', './assets/img/neuves/neuve-3.jpeg', 52265, 500, ['#232323', '#ff8c00', 'darkblue']],
    ];
    let occasions = [
        ['Kya', 'Forte', '2015', './assets/img/occasions/occasion-1.jpeg', 9298, 1000, '#161616', '116,252', 'Manuelle'],
        ['Nissan', 'Versa Note SV', '2018', './assets/img/occasions/occasion-2.jpeg', 12198, null, '#081326', '93,561', 'Automatique' ],
        ['Hyundai', 'Elantra', '2014', './assets/img/occasions/occasion-3.jpeg', 7898, null, '#8b0000', '93,991', 'Manuelle' ]
    ];



})(VEHICULE);