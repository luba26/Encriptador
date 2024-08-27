document.addEventListener('DOMContentLoaded', function() {
    var textareas = document.querySelectorAll('.textarea-wrapper textarea');

    textareas.forEach(function(textarea) {
        var overlayMessage = textarea.nextElementSibling; // El mensaje sobrepuesto

        function checkPlaceholder() {
            if (textarea.value.trim() !== '') {
                overlayMessage.style.opacity = '0'; // Oculta el mensaje cuando hay texto
            } else {
                overlayMessage.style.opacity = '1'; // Muestra el mensaje cuando el campo está vacío
            }
        }

        textarea.addEventListener('focus', function() {
            overlayMessage.style.opacity = '0'; // Oculta el mensaje cuando el textarea tiene el foco
        });

        textarea.addEventListener('blur', function() {
            checkPlaceholder(); // Muestra u oculta el mensaje cuando el textarea pierde el foco
        });

        textarea.addEventListener('input', function() {
            checkPlaceholder(); // Muestra u oculta el mensaje mientras se escribe
        });

        checkPlaceholder(); // Inicializa el estado del mensaje
    });
});