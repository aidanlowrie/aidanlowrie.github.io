---
title: Decoding speech with weighted finite-state transducers
slug: wfst-asr-decoding
order: 3
status: MSc coursework · Automatic Speech Recognition
summary: Composing acoustic, lexicon and language-model knowledge into a single efficient speech decoder.
tags: [speech recognition, WFST, language modelling]
---

Recognising speech means reconciling several sources of evidence at once: what
the acoustics suggest, what the lexicon permits, what the language model expects.
The trick is searching the combined space fast enough to be usable.

I built a decoder around weighted finite-state transducers, with silence
modelling, beam pruning and a KenLM n-gram language model, then measured how much
accuracy I gave up as I pruned the search harder.

[EDITOR NOTE: add your WER figures or the main trade-off you found.]
