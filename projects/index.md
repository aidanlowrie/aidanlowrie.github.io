---
layout: page
title: Projects
description: Projects — Aidan Lowrie.
---

Here is a list of projects I carried out at uni / for fun.

## Selected projects

<ul class="research-list">
{% assign projects = site.projects | sort: 'order' %}
{% for p in projects %}
  {% unless p.section == "mini" %}
  <li>
    <a href="{{ p.url | relative_url }}"><span class="r-title">{{ p.title }}</span></a>
    <span class="r-meta">{{ p.status }}</span>
    <span class="r-desc">{{ p.summary }}</span>
  </li>
  {% endunless %}
{% endfor %}
</ul>

## Mini-projects and experiments

Some projects are smaller: games, visual experiments, weekend tools, or
half-finished prototypes. They still matter because they show what I was playing
with at the time.

<ul class="research-list">
{% for p in projects %}
  {% if p.section == "mini" %}
  <li>
    <a href="{{ p.url | relative_url }}"><span class="r-title">{{ p.title }}</span></a>
    <span class="r-meta">{{ p.status }}</span>
    <span class="r-desc">{{ p.summary }}</span>
  </li>
  {% endif %}
{% endfor %}
</ul>
