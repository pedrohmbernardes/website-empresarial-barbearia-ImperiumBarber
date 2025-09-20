// assets/js/form-validation.js

$(document).ready(function() {

    // 1. Aplicando a máscara no campo de telefone
    $('#phone').mask('(00) 00000-0000');

    // O código do Dialog foi REMOVIDO daqui.

    // 2. Capturando o evento de envio do formulário
    $("#contactForm").on("submit", function(event) {
        // Previne o comportamento padrão de recarregar a página
        event.preventDefault();

        // 3. Validação de TODOS os campos
        let name = $("#name").val();
        let phone = $("#phone").val();
        let service = $("#service").val(); // NOVO: Captura o valor do serviço
        let subject = $("#subject").val(); // NOVO: Captura o valor do assunto
        let message = $("#message").val();
        let isValid = true;

        // Remove estilos de erro anteriores
        $(".form-group input, .form-group select, .form-group textarea").css("border", "1px solid #ccc");

        if (name === "") {
            alert("Por favor, preencha o seu nome.");
            $("#name").css("border", "2px solid red");
            isValid = false;
        } else if (phone.length < 15) {
            alert("Por favor, preencha um número de celular válido.");
            $("#phone").css("border", "2px solid red");
            isValid = false;
        } else if (service === null || service === "") { // NOVO: Validação para o campo de serviço
            alert("Por favor, selecione um tipo de serviço.");
            $("#service").css("border", "2px solid red");
            isValid = false;
        } else if (subject === null || subject === "") { // NOVO: Validação para o campo de assunto
            alert("Por favor, selecione um assunto.");
            $("#subject").css("border", "2px solid red");
            isValid = false;
        } else if (message === "") {
            alert("Por favor, escreva uma mensagem.");
            $("#message").css("border", "2px solid red");
            isValid = false;
        }

        // 4. Se tudo estiver correto, exibe a mensagem de sucesso com o alert padrão
        if (isValid) {
            // MUDANÇA: Usando o alert() padrão do JS
            alert("Sua mensagem foi enviada com sucesso! Agradecemos o seu contato.");
            
            // Limpa o formulário após o envio
            $("#contactForm")[0].reset();
            $(".form-group input, .form-group select, .form-group textarea").css("border", "1px solid #ccc");
        }
    });
});