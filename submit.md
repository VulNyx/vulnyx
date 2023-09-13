---
layout: page
title: Submit
---

{% raw %}

<section class="form-container">
  <form class="form submit-form" id="myForm" action="https://formspree.io/f/xbjewngg" method="POST">
    <article class="form-options">
      <a href="/submit/" class="active">
        <strong>VM</strong>
      </a> 
      <span>|</span>
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
      <label class="form-label" for="url">URL</label>
      <input class="form-control" id="url" name="URL" type="url" pattern="https?://.+" placeholder="Enter the public url of your machine" required />
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
    
    alert("VM sent successfully! Thanks.");

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
      console.error("Error! data not sent.", error);
    });
    
    form.reset();
  });
</script>
