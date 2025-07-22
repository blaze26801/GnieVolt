function sendMail(){
    (function(){
        emailjs.init("k4iCk2HvxfHtGrh6V"); //acoount public key
    })();

    var params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    var serviceID = "service_7elsdhm";
    var templateID = "template_sdxp08z";

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