---
layout: page
title: Projects
description: Projects — Aidan Lowrie.
---

I think of these projects through a single lens: how do you learn good
representations of structured data, and what can you discover by interpreting
what those representations encode? The domains change — speech, text, images,
genes — but the questions are the same.

<ul class="research-list">
{% assign projects = site.projects | sort: 'order' %}
{% for p in projects %}
  <li>
    <a href="{{ p.url | relative_url }}"><span class="r-title">{{ p.title }}</span></a>
    <span class="r-meta">{{ p.status }}</span>
    <span class="r-desc">{{ p.summary }}</span>
  </li>
{% endfor %}
</ul>
