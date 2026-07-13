# 02. Mapping Rules

## Purpose

The purpose of this document is to define the mapping rules that translate the conceptual architecture of the Personal Operating System (POS) into its filesystem representation.

These rules establish how conceptual entities, relationships and processes are materialized without altering the domain model.

They do **not** define the folder structure itself.

Instead, they define the principles that every filesystem implementation must follow.

---

# Mapping Philosophy

The POS defines **what exists**.

The filesystem defines **how it is represented**.

The representation must never modify the conceptual meaning of the domain.

A filesystem is therefore considered an implementation layer, not the architecture itself.

---

# Fundamental Mapping Principles

## MR-001 — Domain Before Representation

Every physical element must represent an existing concept in the POS.

No filesystem structure should exist without a conceptual justification.

---

## MR-002 — Representation Does Not Create Meaning

Folders and files represent domain entities.

They do not define them.

The meaning of an Entity always comes from the POS architecture.

---

## MR-003 — One Domain, Multiple Representations

The same conceptual model may be represented differently across implementations.

Different physical structures are acceptable as long as they preserve the same domain semantics.

---

## MR-004 — Representation Must Be Explicit

Every Entity must have a predictable physical representation.

Implicit structures should be avoided.

---

## MR-005 — Stable Meaning

Changing the implementation must never change the meaning of an Entity.

Only its representation may change.

---

## MR-006 — Filesystem Neutrality

The mapping rules must rely only on concepts common to every hierarchical filesystem.

No platform-specific features are allowed.

---

# Representation Types

A conceptual Entity may be represented through different physical nodes depending on its nature.

## Folder Node

Represents entities that organize or contain other entities.

Typical examples include:

- Context
- Workspace
- Operation
- Project
- Inbox

Folder Nodes define structural boundaries.

---

## File Node

Represents entities whose primary purpose is to store information rather than organize other entities.

Typical examples include:

- Task
- Knowledge
- Resource
- Deliverable

File Nodes usually represent terminal elements within the filesystem.

---

## Hybrid Node

Some entities may be represented either as folders or files depending on their complexity.

Example:

An Asset consisting of a single reusable template may be represented as a single file.

An Asset composed of multiple resources may be represented as a folder.

The conceptual identity remains identical in both cases.

---

# Mapping Rules

## MR-101

Every Entity must have exactly one conceptual meaning.

Its physical representation may vary.

---

## MR-102

A Folder does not necessarily represent an Entity.

Folders created solely for technical organization should remain implementation details.

---

## MR-103

Not every Entity requires a Folder.

Some Entities are naturally represented as files.

---

## MR-104

Physical hierarchy does not redefine conceptual hierarchy.

Containment in the filesystem exists only when it reflects containment in the domain.

---

## MR-105

Filesystem navigation should mirror the conceptual navigation of the POS whenever possible.

---

## MR-106

No Entity may depend on filesystem-specific behavior for its identity.

Identity belongs to the domain, not to the implementation.

---

# Relationship Mapping

Conceptual relationships are translated into filesystem relationships whenever possible.

| POS Relationship | Filesystem Representation |
|------------------|---------------------------|
| Contains | Folder contains Folder/File |
| Uses | Reference documented inside the entity |
| Produces | Output created within the producing entity |
| Transforms | Process changes representation or creates a new node |

Not every conceptual relationship has a direct filesystem equivalent.

Relationships such as **Uses** are semantic rather than structural and therefore must be documented rather than inferred from physical location.

---

# Identity

Identity belongs to the conceptual Entity.

Folders and files are only physical representations.

Moving a folder from one storage provider to another does not create a new Entity.

Renaming a file does not necessarily create a new conceptual object.

The implementation preserves identity independently from storage.

---

# Traceability

Every transformation performed within the implementation should preserve traceability.

The origin of an Entity should remain reconstructable even if its physical representation changes over time.

The implementation prioritizes preserving conceptual history over preserving physical location.

---

# Mapping Validation

A filesystem representation is considered valid only if:

- every physical element represents an existing domain concept;
- no conceptual Entity loses meaning during implementation;
- conceptual relationships remain understandable;
- navigation follows the conceptual model;
- the implementation remains portable across hierarchical filesystems.

---

# Architectural Observation

The mapping layer acts as a translation boundary between the conceptual architecture and its physical implementation.

The POS remains completely independent from folders and files.

Likewise, the filesystem never defines the architecture.

It merely materializes it.

This separation allows multiple implementations of the same conceptual model while preserving a single source of truth.