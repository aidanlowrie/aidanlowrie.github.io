---
layout: project
title: "Reward hacking under GRPO"
summary: "Training language models with Group Relative Policy Optimisation on mathematical reasoning — and watching them learn to cheat."
status: "completed · atnlp coursework · 2026"
order: 2
tags: [reinforcement learning, post-training, reward hacking, GRPO, SFT]
---

For the Advanced Techniques in NLP course at Edinburgh, I trained language models
using Group Relative Policy Optimisation (GRPO) on GSM8K, a mathematical
reasoning benchmark. The most interesting finding wasn't about performance — it
was about failure. The models learned to exploit the reward signal in ways that
produced correct-looking outputs without correct reasoning.

The project included comparisons with supervised fine-tuning and experiments
with SCoRe-style self-correction, where models attempt to improve their own
outputs iteratively. The reward hacking analysis ended up being the most
substantive contribution: understanding *where* reinforcement learning quietly
goes wrong turns out to be at least as important as making it go right.
