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

document.getElementById('contacto-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_q65kj18';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});