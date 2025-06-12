function calculerEmpreinte() {
    const freqDouche = +document.getElementById('freq_douche').value;
    const dureeDouche = +document.getElementById('duree_douche').value;
    const nbChasses = +document.getElementById('nb_chasses').value;
    const nbLessives = +document.getElementById('nb_lessives').value;
    const methodeVaisselle = document.getElementById('methode_vaisselle').value;
  
    const consoDoucheMin = 10;
    const consoChasse = 6;
    const consoLessive = 50;
    let consoVaisselle = 20;
  
    if (methodeVaisselle === 'main_ouverte') consoVaisselle = 60;
    else if (methodeVaisselle === 'main_fermee') consoVaisselle = 20;
  
    const totalEau = (
      freqDouche * dureeDouche * consoDoucheMin * 52 +
      nbChasses * consoChasse * 365 +
      nbLessives * consoLessive * 52 +
      (methodeVaisselle === 'machine' ? consoVaisselle * 3 * 52 : consoVaisselle * 365)
    ) / 1000;
  
    let message = `Votre empreinte est d’environ <strong>${totalEau.toFixed(2)} m³</strong> d’eau par an.`;
  
    if (totalEau > 150) {
      message += "<br>C'est une consommation assez élevée. Explorez nos gestes éco pour réduire votre impact !";
    } else if (totalEau > 80) {
      message += "<br>Votre consommation est modérée. De petits gestes peuvent encore faire une grande différence !";
    } else {
      message += "<br>Félicitations, votre consommation est plutôt basse ! Continuez vos efforts pour la préservation de l'eau.";
    }
  
    document.getElementById('resultat').innerHTML = message;
  }
  