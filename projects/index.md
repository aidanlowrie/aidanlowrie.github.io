---
layout: page
title: Projects
description: Projects — Aidan Lowrie.
---

Here are some projects I carried out for uni / fun.

{% assign projects = site.projects | sort: 'order' %}

{% assign groups = "current research|coursework and degree work|other projects / experiments" | split: "|" %}
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
