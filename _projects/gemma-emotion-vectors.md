---
layout: project
title: "Emotion vectors for Gemma"
summary: "An interpretability pipeline for extracting emotion steering vectors from Gemma 4 26B activations."
status: "research prototype · interpretability · Apr 2026"
order: 10
tags: [interpretability, steering vectors, Gemma, representation learning]
---

This project was a direct attempt to make mechanistic interpretability feel less
abstract. The premise is simple: if a model has internal directions associated
with emotional concepts, can we extract them cleanly enough to steer generation
or study what those directions encode?

The pipeline loads a large open-weight model, processes an emotion-story
dataset, extracts residual-stream activations, removes confounds with PCA, and
saves per-layer steering vectors. It is the kind of project where the plumbing
matters: dataset handling, memory pressure, batching, logging, and resumability
are what make the conceptual experiment possible.

The local timestamp scan dates the source in `Pi/` to April 2026.
