---
layout: page
title: Submit
---

{% raw %}

<h1 class="submit-vm">Submit a new Writeup</h1>
<section class="form-container">
  <form class="form submit-form" id="myForm" action="https://formspree.io/f/xbjewngg" method="POST">
    <article class="form-options">
      <a href="/submit/">
        <strong>VM</strong>
      </a> 
      <span class="form-separator">|</span>
      <a href="/submit-writeup" class="active">
        <strong>Writeup</strong>
      </a> 
    </article>
    <div>
      <label class="form-label" for="creator">Creator</label>
      <input class="form-control" id="creator" name="Creator" type="text" maxlength="15" placeholder="Enter your username" required />
    </div>
    <div>
      <label class="form-label" for="url">URL</label>
      <input class="form-control" id="url" name="URL" type="url" pattern="https?://.+" placeholder="Enter the public url of your writeup" required />
    </div>
    <div>
      <button class="button" type="submit">Submit</button>
      <button class="button" type="reset">Clear</button>
    </div>
    <div class="form-footer">
      <small>Please read our 
        <a href="/rules" target="_blank">
          <strong>Rules</strong>
        </a> 
        section before submitting a new writeup.
      </small>
    </div>
  </form>
</section>

{% endraw %}

<footer>
  <p>© VulNyx 2023</p>
</footer>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    Swal.fire({
      toast: true,
      icon: 'success',
      iconColor: '#fff',
      position: 'bottom',
      title: 'Writeup successfully submitted! Thank you for your contribution.',
      customClass : {
        title: 'swal2-title'
      },
      background: '#21b01d',
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: true,
      timer: 7500,
      timerProgressBar: true,
    });

    var form = document.getElementById("myForm");
    var url = form.action;
    var formData = new FormData(form);

    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(response => {
      console.log("Submit succesfully! Thanks.");
    })
    .catch(error => {
      console.log("The submission was successful but the github pages are throwing a CORS error. Don't worry.");
    });
    form.reset();
  });
</script>
