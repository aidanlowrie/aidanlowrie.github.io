---
layout: project
title: "Emotion vectors for Gemma"
summary: "Exploratory interpretability pipeline for extracting emotion-related activation directions from Gemma activations."
status: "exploratory prototype · interpretability · Apr 2026"
stage: "exploratory prototype"
kind: "interpretability"
period: "Apr 2026"
group: "other projects / experiments"
order: 10
tags: [interpretability, steering vectors, Gemma, representation learning]
published: false
---

This project was an exploratory attempt to make mechanistic interpretability
less abstract. The premise was simple: if a model has internal directions
associated with emotional concepts, can we extract candidates cleanly enough to
inspect or test them?

The pipeline loads an open-weight model, processes an emotion-story dataset,
extracts residual-stream activations, removes confounds with PCA, and saves
per-layer candidate directions. The useful part was mostly the plumbing:
dataset handling, memory pressure, batching, logging, and resumability.

The work remains exploratory and has not yet been evaluated well enough for a
public technical claim, so it is currently unpublished.
