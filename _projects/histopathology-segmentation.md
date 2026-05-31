---
title: Segmenting histopathology images
slug: histopathology-segmentation
order: 4
status: MSc coursework · Computer Vision
summary: "Where the biology meets the vision models: tissue segmentation and self-supervised nucleus classification."
tags: [computer vision, biology, self-supervised learning]
---

Modern vision models learn good representations with little supervision. The
question here was whether that helps with reading tissue slides, which is slow
work that normally needs a trained pathologist.

I trained a U-Net to segment histopathology images and used SimCLR-style
contrastive pretraining to classify nuclei, then compared the self-supervised
representations against supervised baselines. This is the project where my two
backgrounds meet most directly.

[EDITOR NOTE: a sentence on segmentation quality and what the contrastive
pretraining bought you.]
