---
layout: project
title: "Moshi turn-taking data pipeline"
summary: "A data collection and labelling pipeline for full-duplex speech models: discovery, download, diarisation, transcription, Mimi encoding, and turn-yield labels."
status: "prototype · speech research · May 2026"
order: 9
tags: [speech, dialogue, turn-taking, diarisation, full-duplex models]
---

My dissertation work is about turn-taking in dialogue systems, and this pipeline
was a practical attempt to create the kind of data such systems need. Full-duplex
speech models need more than transcripts: they need timing, speaker state,
audio-codec tokens, and labels that say whether the system should hold or yield
the floor.

The pipeline stages are deliberately explicit: discover suitable conversational
audio, download it, diarise and transcribe it, encode the audio through Mimi, and
generate training labels for future user state and turn yielding. It is less a
polished product than a research data machine.

The local files date this work to May 2026, under `moshi-data-pipeline/`.
