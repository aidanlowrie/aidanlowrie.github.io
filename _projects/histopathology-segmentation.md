---
layout: project
title: "Histopathology image segmentation"
summary: "UNet for nucleus segmentation, SimCLR for classification — the point where the biology degree and the ML toolkit meet."
status: "completed · computer vision coursework · 2026"
order: 4
tags: [computer vision, UNet, SimCLR, contrastive learning, medical imaging]
---

This project sits at the intersection of my two degrees. For the Computer Vision
course, I built a UNet-based segmentation pipeline for identifying nuclei in
histopathology images, followed by a nucleus classification system using both
supervised learning and SimCLR-based contrastive learning.

The biology background mattered here in a way it doesn't for most CV coursework.
Understanding what the model is looking at — the morphological differences
between cell types, the staining artefacts, the clinical significance of getting
segmentation boundaries right — changes how you evaluate results. A Dice score is
a number; knowing whether the errors are clinically meaningful is domain
knowledge.
