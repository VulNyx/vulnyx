---
layout: page
title: Submit
---

{% raw %}

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<section class="form-container">
  <form class="form contact-form" action="https://formspree.io/f/xbjewngg" method="POST">
    <div>
      <label class="form-label" for="name">VM Name</label>
      <input class="form-control" id="name" name="VM Name" type="text" required />
    </div>
    <div>
      <label class="form-label" for="creator">Creator</label>
      <input class="form-control" id="creator" name="Creator" type="text" required />
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
      <input class="form-control" id="url" name="URL" type="url" required />
    </div>
    <div>
      <label class="form-label" for="solution">Solution</label>
      <textarea class="form-control" id="solution" name="Solution" required></textarea>
    </div>
    <div>
      <button class="button" type="submit">Submit</button>
      <button class="button" type="reset">Clear</button>
    </div>
  </form>
</section>
  <script  src="/assets/submit_script.js"></script>

{% endraw %}
