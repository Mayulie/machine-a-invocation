const formulaire = document.getElementById("formulaire")

const invoquer = () => {
    // empeche de recharger la page
    event.preventDefault()

    // recupere les valeurs des champs du formulaire (prenom et creature)
    const prenom = document.getElementById('prenom').value
    const creature = document.getElementById('creature').value
    console.log(prenom)
    console.log(creature)

    // construit le message
    const msg = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`

    // Affiche le message dans le paragraphe avec l'id 'message'
    const message = document.getElementById("message")
    message.textContent = msg

    formulaire.classList.add('cache')


    // affiche la section 'resultat'
    const resultat = document.getElementById("resultat")
    resultat.classList.remove("cache");

}
const btnRecommencer = document.getElementById("recommencer")

const recommencer = () => {
    resultat.classList.add('cache')
    formulaire.classList.remove("cache");

}
formulaire.addEventListener("submit", invoquer)
btnRecommencer.addEventListener("click", recommencer)


