document.addEventListener('DOMContentLoaded', function () {
    var expandableDivs = document.querySelectorAll('.servicio');

    expandableDivs.forEach(function (div) {
        div.addEventListener('click', function () {
            this.classList.toggle('active');
            var icon = this.querySelector('.icon');
            if (this.classList.contains('active')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});


const btn = document.getElementById('boton-correo');
const confirmacion = document.getElementById('confirmacion')

document.getElementById('contacto-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando email...';

   const serviceID = 'default_service';
   const templateID = 'template_q65kj18';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Email enviado';
      confirmacion.innerHTML = ''
      confirmacion.innerHTML = `<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
      <strong>Mail enviado exitosamente!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.getElementById('emailjs_message').value = ""
      document.getElementById('emailjs_email').value = ""
      document.getElementById('emailjs_name').value = ""
    }, (err) => {
      btn.value = 'Send Email';
      confirmacion.innerHTML = ''
      confirmacion.innerHTML = `<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
      <strong>Error al enviar el mail!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      alert(JSON.stringify(err));
    });
});