# 01. Foundation

## Purpose

The **POS Filesystem Reference Implementation (PFSI)** exists to validate that the conceptual architecture of the **Personal Operating System (POS)** can be implemented using only a hierarchical file system.

Its purpose is not to define a new architecture, but to demonstrate that the POS domain can be represented through folders and files without losing meaning, consistency, traceability or technological independence.

This implementation serves as the **reference implementation** of the POS and establishes the baseline against which future implementations (Notion, Obsidian, Google Drive, dedicated applications, etc.) can be evaluated.

---

# Vision

Build a simple, predictable and platform-independent reference implementation capable of demonstrating that the Personal Operating System can operate without relying on databases, proprietary features, automations or specific applications.

The implementation should serve as a practical validation of the POS architecture and as a guide for future implementations across different technologies.

---

# Problems

The POS already defines a conceptual architecture, but it has not yet been validated in a real implementation.

Traditional folder structures usually emerge organically over time, mixing projects, documentation, temporary files and reusable resources without explicit architectural rules. As a consequence:

- organization depends on personal habits rather than a consistent model;
- folders reflect software limitations instead of domain concepts;
- duplicated information becomes common;
- reusable knowledge is difficult to identify;
- migrating to another platform usually requires reorganizing the entire system.

The PFSI exists to validate that a hierarchical file system can faithfully represent the POS domain through explicit architectural rules rather than tool-specific conventions.

---

# Goals

The implementation aims to:

1. Validate the conceptual model of the Personal Operating System.
2. Define a physical representation for every POS Entity.
3. Preserve the correspondence between the conceptual domain and its filesystem implementation.
4. Demonstrate that the POS can operate using only folders and files.
5. Serve as the reference implementation for future platforms.
6. Reveal architectural weaknesses before developing software implementations.

---

# Non Goals

The PFSI does **not** aim to:

- become a document management system;
- replace specialized productivity tools;
- optimize filesystem performance;
- introduce automation or artificial intelligence;
- solve operating system specific problems;
- define an implementation exclusively for Windows, Google Drive or any other platform;
- extend or modify the conceptual architecture of the POS.

Any improvement discovered during implementation must first be incorporated into the POS architecture before becoming part of this implementation.

---

# Core Philosophy

## CP-001 — Implementation Follows Architecture

The implementation represents the POS architecture.

It never defines or modifies it.

---

## CP-002 — Representation over Optimization

Correctly representing the conceptual domain is more important than optimizing the implementation for a particular platform.

---

## CP-003 — Explicit Structure

Every architectural decision should be visible within the filesystem structure.

Hidden relationships are avoided.

---

## CP-004 — Simplicity through Consistency

Simplicity emerges from applying the same architectural rules throughout the entire implementation.

---

## CP-005 — Validation through Usage

The implementation exists to validate the conceptual architecture through everyday use.

Observed friction is considered valuable architectural feedback.

---

# Implementation Principles

## IP-001 — Domain First

The conceptual domain always precedes the implementation.

The filesystem adapts to the architecture, never the opposite.

---

## IP-002 — Tool Neutral

The implementation only relies on capabilities available in any hierarchical filesystem.

No proprietary features should be required.

---

## IP-003 — Predictable Representation

Every POS Entity must have a clear and consistent filesystem representation.

---

## IP-004 — Predictable Navigation

The location of every element should be understandable by knowing the conceptual model.

Navigation should not depend on personal memory.

---

## IP-005 — Minimal Physical Structure

The implementation should use the minimum physical structure required to express the conceptual domain.

---

## IP-006 — No Hidden Behaviour

The implementation must not rely on hidden metadata, external configuration or implicit relationships.

Everything necessary to understand the system should be observable directly from the filesystem.

---

# Success Criteria

The implementation will be considered successful if:

## SC-001

Every POS Entity has a clear and consistent physical representation.

---

## SC-002

Every POS Process can be executed using only folders and files.

---

## SC-003

The implementation can be migrated between hierarchical filesystems without changing its conceptual structure.

---

## SC-004

The filesystem is understandable without requiring platform-specific knowledge.

---

## SC-005

The implementation provides meaningful feedback for improving the conceptual architecture of the POS.

---

# Architectural Constraints

| ID | Constraint | Rationale |
|----|------------|-----------|
| AC-001 | Only folders and files may be used. | Ensures maximum portability. |
| AC-002 | Databases are not allowed. | Keeps the implementation independent from external systems. |
| AC-003 | Proprietary metadata must not be required. | Preserves interoperability across platforms. |
| AC-004 | Automation is optional and external. | The architecture must work manually. |
| AC-005 | The implementation must never redefine the POS domain. | Preserves the separation between architecture and implementation. |

---

# Relationship with the Personal Operating System

The Personal Operating System (POS) defines the conceptual architecture of the system.

The POS Filesystem Reference Implementation (PFSI) defines one possible way of materializing that architecture using a hierarchical filesystem.

Different implementations may represent the same conceptual model through different physical structures, provided they preserve the entities, relationships, processes, invariants and principles defined by the POS.

The conceptual architecture remains the single source of truth.

The implementation exists only to validate and materialize it.