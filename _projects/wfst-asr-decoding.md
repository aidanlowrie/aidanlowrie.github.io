---
layout: project
title: "WFST-based ASR decoding"
summary: "ASR coursework implementing a WFST decoder with beam pruning, silence modelling, and KenLM language-model scoring."
status: "completed · asr coursework · 2025"
stage: "completed"
kind: "asr coursework"
period: "2025"
group: "coursework and degree work"
order: 3
tags: [speech recognition, WFSTs, beam search, language modelling]
---

For the Automatic Speech Recognition course, I implemented a decoder built on
weighted finite-state transducers — the classical backbone of ASR systems before
end-to-end neural approaches took over. The work involved WFST composition and
optimisation, beam-pruned Viterbi decoding, explicit silence modelling, and
integration with KenLM for n-gram language model scoring.

This was an exercise in understanding the engineering beneath the abstractions.
Modern ASR systems hide this machinery inside neural architectures, but the
problems it solves — efficient search over exponentially large hypothesis spaces,
principled integration of acoustic and language model scores — haven't gone away.
They've just been reformulated.
