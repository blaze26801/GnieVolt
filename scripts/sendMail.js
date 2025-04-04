function sendMail(){
    (function(){
        emailjs.init("zO4oGTMEHHiyR-uZK"); //acoount public key
    })();

    var params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    var serviceID = "service_2202zsl";
    var templateID = "template_aewxr9o";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("Wiadomość została pomyślnie wysłana - dziękuję za kontakt! Odpowiem tak szybko jak to możliwe :)");
    })
    .catch(error => {
        console.error("Błąd wysyłki:", error);
    });
}


document.querySelector("#mail-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony
    sendMail();
});