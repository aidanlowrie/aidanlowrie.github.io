---
layout: project
title: "Moshi turn-taking data pipeline"
summary: "Reproducible data pipeline for preparing conversational audio and turn-control labels for dialogue-model adaptation."
status: "research pipeline · 2026"
stage: "research pipeline"
kind: "speech data tooling"
period: "May 2026"
group: "research and engineering"
order: 9
tags: [speech, dialogue, turn-taking, diarisation, full-duplex models]
---

This pipeline supported my MSc dissertation on adapting full-duplex dialogue
models. These models require more than transcripts: training data must preserve
timing, speaker state, audio-codec tokens and labels describing future user
activity and turn control.

The pipeline discovers suitable conversational recordings, performs speaker
diarisation and transcription, encodes audio and generates aligned auxiliary
labels. Explicit stages and recorded provenance made model conditions easier to
reproduce and compare.
