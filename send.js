
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contact-form');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Предотвратява презареждане на страницата

                // Събиране на данните от формата
                const formData = new FormData(form);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const email = formData.get('email');
                const message = formData.get('message');

                // Изпращане на имейл
                const subject = 'New Contact Form Submission';
                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

                // Подменете 'recipient@example.com' с желаната поща
                const recipientEmail = 'e.and.k.bratanov@gmail.com';
                const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

                // Изпращане на имейла
                window.location.href = mailtoLink;

                // Изчистване на формата след успешно изпратено съобщение
                form.reset();
            });
        });
