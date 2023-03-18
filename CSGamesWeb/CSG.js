$(document).ready(function () {
    // Gestion de la soumission du formulaire
    $('#login-form').submit(function (event) {
        // Empêche le formulaire de se soumettre normalement
        event.preventDefault();

        // Récupération des données du formulaire
        const username = $('#username').val();
        const password = $('#password').val();

        // Envoi des données au serveur
        $.ajax({
            url: '/connect/token',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                password: password
            })
        })
            .done(function (data) {
                // Stockage du token JWT dans le localStorage
                localStorage.setItem('token', data.token);
                // Redirection vers la page protégée
                window.location.href = '/protected';
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                // Affichage du message d'erreur
                $('#error-message').text(jqXHR.responseJSON.message);
            });
    });
});