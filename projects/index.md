---
layout: page
title: Projects
description: Projects — Aidan Lowrie.
---

Selected research, coursework and engineering projects. Prototype status is
shown explicitly where work is still exploratory.

{% assign projects = site.projects | sort: 'order' %}

{% assign groups = "research and engineering|coursework and degree work" | split: "|" %}
{% for group in groups %}
{% assign group_projects = projects | where: "group", group %}
{% if group_projects.size > 0 %}

## {{ group | capitalize }}

<ul class="research-list research-list--journey">
{% for p in group_projects %}
  <li>
    <a href="{{ p.url | relative_url }}"><span class="r-title">{{ p.title }}</span></a>
    <span class="r-meta">
      <span class="r-stage">{{ p.stage }}</span>
      <span>{{ p.kind }}</span>
      <span>{{ p.period }}</span>
    </span>
    <span class="r-desc">{{ p.summary }}</span>
  </li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}
