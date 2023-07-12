---
layout: page
title: Submit
---

{% raw %}

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<section class="form-container">
  <form class="form contact-form" id="myForm" action="https://formspree.io/f/xbjewngg" method="POST">
    <article class="form-options">
      <a href="/submit/">
        <strong>VM</strong>
      </a> 
      <span>|</span>
      <a href="/submit-writeup" class="active">
        <strong>Writeup</strong>
      </a> 
    </article>
    <div>
      <label class="form-label" for="creator">Creator</label>
      <input class="form-control" id="creator" name="Creator" type="text" required />
    </div>
    <div>
      <label class="form-label" for="url">URL</label>
      <input class="form-control" id="url" name="URL" type="url" required />
    </div>
    <div>
      <button class="button" type="submit">Submit</button>
      <button class="button" type="reset">Clear</button>
    </div>
  </form>
</section>
{% endraw %}

<footer>
  <p>© VulNyx 2023</p>
</footer>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();
    
    // Mostrar el mensaje al usuario
    alert("¡Formulario enviado correctamente!");

    // Enviar los datos del formulario
    var form = document.getElementById("myForm");
    var url = form.action;
    var formData = new FormData(form);

    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(response => {
      // Aquí puedes realizar acciones adicionales después de enviar los datos
      console.log("Datos enviados correctamente");
    })
    .catch(error => {
      console.error("Submit succesfully! Thanks.", error);
    });
    
    // Restablecer el formulario
    form.reset();
  });
</script>
