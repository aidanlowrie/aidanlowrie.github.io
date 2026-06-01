---
layout: project
title: "Explain: large graph visualisation"
summary: "A WebGL graph visualisation experiment using cosmos.gl, rendering a thousand-plus category graph at interactive frame rates."
status: "prototype · graph visualisation · Dec 2025"
order: 7
tags: [graphs, WebGL, visualisation, TypeScript, knowledge structures]
---

This project came from an old recurring problem in my tools: I keep building
graphs of concepts, files, notes, topics, and dependencies, and then discovering
that ordinary graph views become unreadable almost immediately.

`Explain` is a WebGL graph visualisation experiment built with `cosmos.gl`.
In the current local version it renders a category graph with roughly 1,200
categories and 10,000 links at interactive frame rates. The interface is spare:
fit, pause, regenerate, inspect. The goal was to make the graph itself feel
alive enough to explore rather than decorative.

The project scan dates the source to December 2025. It sits in `GraphTest/`.
