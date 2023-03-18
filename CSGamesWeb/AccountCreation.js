const form = document.getElementById('signup-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Récupération des champs du formulaire
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
        message.innerHTML = 'Les mots de passe ne correspondent pas.';
        return;
    }

    // Envoi de la requête POST /user/create
    fetch('/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username
        })
    })
})