---
layout: page
title: Writing
description: Notes and essays by Aidan Lowrie on learning science, knowledge tracing, and language technology.
---

I write now and then about the things I keep coming back to: knowledge tracing,
learning science, and how people put what they understand outside their own
heads.

{% if site.posts.size > 0 %}
<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}"><span class="r-title">{{ post.title }}</span></a>
    <span class="r-status">{{ post.date | date: "%B %Y" }}</span>
  </li>
{% endfor %}
</ul>
{% else %}
<p class="more">More soon.</p>
{% endif %}
