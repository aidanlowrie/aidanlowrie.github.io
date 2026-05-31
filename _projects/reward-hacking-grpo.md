---
title: Reward hacking under GRPO
slug: reward-hacking-grpo
order: 2
status: MSc coursework · Advanced Topics in NLP
summary: Fine-tuning a reasoning model with reinforcement learning, and tracing where the reward signal quietly goes wrong.
tags: [reinforcement learning, post-training, reasoning]
---

Reinforcement learning can make a model better at the task you meant, or just
better at the proxy you measured. I wanted to find where that split shows up when
you fine-tune a reasoning model on maths.

I trained a language model on GSM8K with GRPO, set it against a supervised
fine-tuning baseline, and ran a set of SCoRe-style self-correction experiments.
Then I went looking for the cases that matter: where the reward climbed while the
reasoning underneath it got worse. [EDITOR NOTE: confirm the base model and add
your headline finding.]

[EDITOR NOTE: one or two sentences on results — the GRPO/SFT gap and the failure
modes you found.]
