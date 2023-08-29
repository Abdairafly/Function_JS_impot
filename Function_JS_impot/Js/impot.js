// Récupère l'élément de formulaire avec l'ID "impotForm"
const form = document.getElementById('impotForm');

// Ajoute un écouteur d'événements pour la soumission du formulaire
form.addEventListener('submit', function(event) {
  // Empêche le comportement par défaut du formulaire (rechargement de la page)
  event.preventDefault();

  // Récupère la valeur de l'âge à partir de l'élément de saisie avec l'ID "ageInput"
  const age = parseInt(document.getElementById('ageInput').value);

  // Récupère la valeur du sexe à partir de l'élément de sélection avec l'ID "sexeSelect"
  const sexe = document.getElementById('sexeSelect').value;

  // Récupère l'élément où le résultat sera affiché
  let resultat = document.getElementById('resultat');

  // Évalue les conditions pour déterminer si l'habitant est imposable en fonction de son âge et de son sexe
  if (sexe === 'homme' && age > 20) {
    resultat.innerHTML = "L'habitant est imposable.";
  } else if (sexe === 'femme' && age >= 18 && age <= 35) {
    resultat.innerHTML = "L'habitant est imposable !";
  } else {
    resultat.innerHTML = "L'habitant n'est pas imposable :)";
  }

  // Affiche le résultat en modifiant le style pour le rendre visible
  resultat.style.display = 'block';
});
