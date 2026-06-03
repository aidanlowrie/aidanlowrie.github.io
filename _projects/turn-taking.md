---
layout: project
title: "Turn-taking prediction in duplex models"
summary: "MSc dissertation work on whether sparse autoencoders can recover timing-related features in duplex speech-model representations."
status: "in progress · msc dissertation · 2026"
stage: "in progress"
kind: "msc dissertation"
period: "2026"
group: "current research"
order: 1
tags: [dialogue, prosody, mechanistic interpretability, sparse autoencoders]
---

People coordinate turns in conversation through a web of cues — prosody, syntax,
breath, gaze — that lets them hand the floor back and forth without the awkward
silences or constant interruptions that make talking to a machine feel wrong.
Current dialogue systems and duplex models often still need better ways to decide
when a speaker is about to yield. The question is whether we can do better:
learn to anticipate turn boundaries from richer internal representations rather
than relying only on silence.

My dissertation approaches this as a mechanistic interpretability problem. I'm
training sparse autoencoders on the hidden representations of a dialogue model
and looking for features that activate at turn boundaries. Finding a correlation
is the easy part. The harder question — and the one that would make this
interesting — is whether those features are *causally* implicated in the model's
predictions. I'm using activation patching to test this: swapping activations
from non-turn-boundary contexts into the forward pass and checking whether the
model's predictions flip.

Early results suggest there's something there, but it's early days. The risk is
that the features I find are proxies for something trivial — pause duration,
energy drop-off — rather than anything about turn-taking as such. The domain
knowledge matters here: knowing which findings are surprising and which are
obvious is what separates a correlation from a contribution.

Supervised by Sarenne Wallbridge and co-supervised by Catherine Lai.
