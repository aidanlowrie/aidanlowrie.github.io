---
layout: project
title: "Circuit Atlas"
summary: "Prototype interface for exploring SAE feature clusters and their interactions across transformer layers."
status: "prototype · interpretability interface · 2026"
stage: "prototype"
kind: "interpretability interface"
period: "2026"
group: "current research"
order: 8
tags: [interpretability, sparse autoencoders, graph visualisation, React]
---

Circuit Atlas is a prototype interface for making circuit-discovery work easier
to inspect. The backend prepares a corpus of feature clusters and interactions;
the frontend turns that into a navigable graph with constellation, circuit-board,
and feature-detail views.

I would describe this as research tooling rather than a finished discovery
system. The useful part is the shape of the interface: moving from thousands of
low-level SAE features toward something you can browse, filter, and question.
That connects directly to the dissertation problem, where interpretability work
only becomes useful once there is a way to inspect the structure it finds.
