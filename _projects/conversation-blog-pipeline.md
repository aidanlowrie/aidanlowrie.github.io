---
layout: project
title: "Conversation-to-blog pipeline"
summary: "A pipeline for turning long Claude conversation exports into essay drafts with extracted ideas, provenance, scoring, and Hugo-ready output."
status: "prototype · writing pipeline · Mar 2026"
order: 8
tags: [writing, Claude, provenance, information extraction, tooling]
---

I have a large amount of useful thinking trapped in conversations. The problem
is that a conversation is not an essay: ideas recur, split, get refined, and get
buried under scaffolding. This project was an attempt to recover the underlying
intellectual structure.

The pipeline ingests Claude exports, filters for substantive conversations,
extracts atomic ideas with provenance, builds a structure from those ideas, and
drafts Hugo-compatible posts with metadata mapping paragraphs back to the source
conversation turns. The important constraint is not just "summarise this chat";
it is preserving enough provenance that the draft remains auditable.

The local timestamp scan places the work in March 2026, under
`2026/ConversationBlogs/blog-pipeline/`.
