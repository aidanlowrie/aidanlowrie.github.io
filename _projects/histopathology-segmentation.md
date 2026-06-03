---
layout: project
title: "Histopathology image segmentation"
summary: "Computer vision coursework: UNet nucleus segmentation, then supervised and SimCLR-based classification."
status: "completed · computer vision coursework · 2026"
stage: "completed"
kind: "computer vision coursework"
period: "2026"
group: "coursework and degree work"
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
