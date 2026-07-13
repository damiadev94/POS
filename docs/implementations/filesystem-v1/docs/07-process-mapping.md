# 07. Process Mapping

## Purpose

This document defines how the conceptual Processes of the Personal Operating System (POS) are executed within the POS Filesystem Reference Implementation (PFSI).

Its purpose is to translate conceptual transformations into filesystem operations while preserving the integrity of the domain model.

The implementation never changes the conceptual processes.

It only defines how they are materialized.

---

# Mapping Philosophy

Processes belong to the POS.

Filesystem actions belong to the implementation.

Every filesystem action must represent a conceptual transformation already defined by the POS.

No implementation-specific workflow may alter the conceptual meaning of a process.

---

# Process Mapping Principles

## PM-001 — Process Before Action

Filesystem actions exist because a conceptual process exists.

Actions never create new processes.

---

## PM-002 — One Process, Many Actions

A conceptual process may require multiple filesystem actions.

The process remains a single conceptual transformation.

---

## PM-003 — Traceable Transformations

Every transformation should preserve the origin of the affected entity.

Conceptual history must remain reconstructable.

---

## PM-004 — Explicit State Changes

Filesystem actions should make state changes observable.

Implicit transitions should be avoided.

---

## PM-005 — Representation Does Not Modify Meaning

Moving, renaming or copying files does not change the conceptual meaning of a process.

---

# Process Mapping

| POS Process | Filesystem Action |
|--------------|------------------|
| Capture | Create a new node inside Inbox |
| Process | Classify or relocate the node to its destination |
| Execute | Modify the entity while work is being performed |
| Learn | Create or update a Knowledge entity |
| Build | Create or improve an Asset |
| Deliver | Transfer the Deliverable to its destination |
| Review | Evaluate an existing entity and decide its next evolution |
| Archive | Move inactive entities into Archive |

---

# Capture

## Conceptual Purpose

Introduce new information into the system.

## Filesystem Representation

```
Inbox/

    New Idea.md

    Article.pdf

    Voice Note.mp3
```

Capture never classifies.

It only records.

---

# Process

## Conceptual Purpose

Assign meaning and destination.

## Filesystem Representation

```
Inbox/

    Article.pdf

↓

Knowledge/

    SEO Principles.md
```

or

```
Inbox/

    Client Request.md

↓

Projects/

    Website Redesign/
```

Processing determines what an entity becomes.

---

# Execute

## Conceptual Purpose

Perform work.

## Filesystem Representation

```
Project/

    Brief.md

↓

Project/

    Brief.md
    Wireframes.fig
    Homepage.png
```

Execution modifies or produces artifacts.

---

# Learn

## Conceptual Purpose

Transform experience into reusable knowledge.

## Filesystem Representation

```
Resource

↓

Knowledge.md
```

Knowledge should only exist after an explicit learning process.

---

# Build

## Conceptual Purpose

Transform reusable knowledge into reusable assets.

## Filesystem Representation

```
Knowledge/

    Landing Page Principles.md

↓

Assets/

    Landing Page Template/
```

Assets represent accumulated value.

---

# Deliver

## Conceptual Purpose

Transfer completed work.

## Filesystem Representation

```
Projects/

    Brand Identity/

↓

Delivered/

    Brand Identity.pdf
```

Delivery completes the operational objective.

---

# Review

## Conceptual Purpose

Evaluate the current state of an entity.

Possible outcomes include:

- continue;
- improve;
- archive;
- transform.

Filesystem actions depend on the review result.

---

# Archive

## Conceptual Purpose

Remove entities from active work while preserving history.

## Filesystem Representation

```
Projects/

    Website Redesign/

↓

Archive/

    Website Redesign/
```

Archiving preserves conceptual identity.

---

# Process Matrix

| Process | Creates | Updates | Moves | Archives |
|-----------|---------|----------|--------|-----------|
| Capture | ✓ | | | |
| Process | | ✓ | ✓ | |
| Execute | | ✓ | | |
| Learn | ✓ | ✓ | | |
| Build | ✓ | ✓ | | |
| Deliver | | | ✓ | |
| Review | | ✓ | ✓ | ✓ |
| Archive | | | ✓ | ✓ |

---

# Process Validation

A process implementation is considered valid if:

- every filesystem action represents a conceptual process;
- conceptual traceability is preserved;
- filesystem operations do not redefine the domain;
- transformations remain understandable;
- implementation remains independent from any specific platform.

---

# Architectural Observation

The filesystem never executes processes.

People execute processes.

The filesystem only records their effects.

This distinction is fundamental.

The Personal Operating System defines how work evolves.

The Filesystem Reference Implementation defines how that evolution becomes visible through folders and files.

The implementation therefore records transformations rather than performing them.