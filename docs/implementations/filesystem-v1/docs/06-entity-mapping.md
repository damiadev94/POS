# 06. Entity Mapping

## Purpose

This document defines how every conceptual Entity of the Personal Operating System (POS) is represented within the POS Filesystem Reference Implementation (PFSI).

Its purpose is to establish a consistent and predictable correspondence between the conceptual domain and its physical representation.

Entity Mapping does not define folder hierarchy, naming conventions or workflows.

It only defines the physical representation of each Entity.

---

# Mapping Principles

## EM-001 — Concept Before Representation

Every Entity exists independently of its physical representation.

The filesystem materializes the Entity but never defines its meaning.

---

## EM-002 — Representation Follows Responsibility

The physical representation of an Entity depends on its role within the conceptual model.

Entities that organize other entities are typically represented as folders.

Entities that primarily contain information are typically represented as files.

---

## EM-003 — Stable Identity

Changing the physical location of an Entity must not change its conceptual identity.

Identity belongs to the domain.

---

## EM-004 — Representation is Predictable

The same Entity should always be represented in the same way unless explicitly defined otherwise.

---

## EM-005 — Physical Representation is Minimal

Every Entity should be represented using the simplest possible filesystem structure.

---

# Representation Types

The implementation recognizes three physical representation types.

## Folder Node

Represents Entities whose responsibility is structural or organizational.

Folder Nodes may contain:

- other Folder Nodes;
- File Nodes;
- Artifacts.

---

## File Node

Represents Entities whose primary responsibility is informational.

File Nodes usually correspond to a single document.

---

## Hybrid Node

Some Entities may be represented either as folders or files depending on their complexity.

Hybrid Nodes preserve identical conceptual meaning regardless of representation.

---

# Entity Mapping

| Entity | Representation | Type | Rationale |
|----------|---------------|------|-----------|
| Context | Folder | Structural | Highest organizational boundary. |
| Workspace | Folder | Structural | Operational boundary for work. |
| Operation | Folder | Structural | Groups recurring work and related entities. |
| Project | Folder | Structural | Groups temporary work until completion. |
| Inbox | Folder | Structural | Temporary capture area. |
| Task | File | Informational | Smallest executable work unit. |
| Knowledge | File | Informational | Structured reusable knowledge. |
| Resource | File | Informational | Input used during work. |
| Deliverable | File | Informational | Output produced by work. |
| Idea | File | Informational | Captured opportunity awaiting processing. |
| Discipline | File | Informational | Describes a capability rather than a container. |
| Tool | File | Informational | Documents an implementation dependency. |
| Asset | Hybrid | Structural / Informational | May represent either a reusable document or a reusable collection of resources. |

---

# Hybrid Entities

## Asset

Assets require special treatment.

A reusable template:

```
Proposal Template.docx
```

is naturally represented as a File Node.

However:

```
Brand Identity/

    Logo.ai

    Colors.pdf

    Typography.pdf

    README.md
```

represents a reusable collection and therefore becomes a Folder Node.

Both represent the same conceptual Entity:

Asset.

---

# Containment Rules

Representation does not imply ownership.

Example:

```
Project/

    logo.ai
```

does not mean that the Project owns the Asset.

It only means the Asset is physically stored there.

Conceptual ownership always follows the POS Domain Model.

---

# Identity Rules

Moving

Renaming

Copying

Archiving

or synchronizing filesystem nodes must never redefine the conceptual Entity.

Identity belongs to the conceptual model rather than the implementation.

---

# Representation Matrix

| Representation | May contain other Entities | May contain Artifacts |
|----------------|----------------------------|-----------------------|
| Folder Node | Yes | Yes |
| File Node | No | No |
| Hybrid Node | Depends on representation | Depends on representation |

---

# Mapping Validation

An Entity Mapping is valid if:

- every POS Entity has a physical representation;
- conceptual meaning remains unchanged;
- representation is predictable;
- representation is independent from filesystem implementation details;
- physical representation supports the conceptual responsibilities of the Entity.

---

# Architectural Observation

One of the most important discoveries during the implementation is the separation between conceptual identity and physical representation.

An Entity is not a folder.

An Entity is not a file.

Folders and files are merely implementation mechanisms used to materialize concepts defined by the Personal Operating System.

This separation preserves the independence of the conceptual architecture while allowing different implementations to represent the same domain in different ways.