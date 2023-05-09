---
layout: page
title: Submit
---

{% raw %}
<form action="https://formspree.io/f/xbjewngg" method="POST">
  <label for="vmname">VM Name:</label>
  <input type="text" id="vmname" name="VM Name">
<br>
<label for="level">Level:</label>
<select id="level" name="Level">
<option value="Easy">Easy</option>
<option value="Medium">Medium</option>
<option value="Hard">Hard</option>
</select>
<br>
<label for="creator">Creator:</label>
<input type="text" id="creator" name="Creator">
<br>
<label for="url">URL:</label>
<input type="text" id="url" name="URL">
<br>
<label for="solution">Solution:</label>
  <textarea id="writeup" name="Solution"></textarea>
<br>
<button type="submit">Submit</button>
</form>
{% endraw %}
