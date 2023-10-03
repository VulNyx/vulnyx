---
layout: page
title: Submit VM
---

{% raw %}

<h1 class="submit-vm">Submit a new VM</h1>
<section class="form-container">
  <form class="form submit-form" id="myForm" action="https://formspree.io/f/xbjewngg" method="POST">
    <article class="form-options">
      <a href="/submit/" class="active">
        <strong>VM</strong>
      </a> 
      <span class="form-separator">|</span>
      <a href="/submit-writeup">
        <strong>Writeup</strong>
      </a> 
    </article>
    <div>
      <label class="form-label" for="name">VM Name</label>
      <input class="form-control" id="name" name="VM Name" type="text" maxlength="20"  placeholder="Enter the machine name" required />
    </div>
    <div>
      <label class="form-label" for="creator">Creator</label>
      <input class="form-control" id="creator" name="Creator" type="text" maxlength="15"  placeholder="Enter your username" required />
    </div>
    <div>
      <label class="form-label" for="level">Level</label>
      <select class="form-control" id="level" name="Level" required>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
      </select>
    </div>
    <div>
      <label class="form-label" for="creator">User Flag</label>
      <input class="form-control" id="user-flag" name="UserFlag" type="text" maxlength="32"  placeholder="Enter the user flag" required />
    </div>
    <div>
      <label class="form-label" for="creator">Root Flag</label>
      <input class="form-control" id="root-flag" name="RootFlag" type="text" maxlength="32"  placeholder="Enter the root flag" required />
    </div>
    <div>
      <label class="form-label" for="url">URL</label>
      <input class="form-control" id="url" name="URL" type="url" pattern="https?://.+" placeholder="Enter the public url of your machine" required />
    </div>
    <div>
      <label class="form-label" for="solution">Tags</label>
      <textarea class="form-control" id="tags" name="Tags" maxlength="200" rows="1" placeholder="Indicate the main tags that identify the machine separated by commas." required></textarea>
    </div>
    <div>
      <label class="form-label" for="solution">Solution</label>
      <textarea class="form-control" id="solution" name="Solution" maxlength="2000" rows="10" placeholder="Explain how to solve the machine. Indicate the steps to get the user and root flags." required></textarea>
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
        section before submitting a new vm.
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
      title: 'VM successfully submitted! Thank you for your contribution.',
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
