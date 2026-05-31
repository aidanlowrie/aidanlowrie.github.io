---
layout: page
title: Research
description: Selected research and projects by Aidan Lowrie.
---

Research and projects, each framed around the problem it was trying to solve.
Some are from my master's coursework, one is my dissertation, and some I built
on my own time. Code is linked where it's public.

<ul class="research-list full">
{% assign order = "turn-taking,reward-hacking-grpo,wfst-asr-decoding,histopathology-segmentation,ai-tutor-knowledge-tracing" | split: "," %}
{% for slug in order %}
  {% assign p = site.projects | where: "slug", slug | first %}
  {% if p %}
  <li>
    <a href="{{ p.url | relative_url }}"><span class="r-title">{{ p.title }}</span></a>
    <span class="r-status">{{ p.status }}</span>
    <span class="r-desc">{{ p.summary }}</span>
  </li>
  {% endif %}
{% endfor %}
</ul>
