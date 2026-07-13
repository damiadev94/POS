# 03. Folder Structure

## Purpose

This document defines the physical folder hierarchy of the POS Filesystem Reference Implementation (PFSI).

Its objective is to organize the filesystem according to the conceptual architecture of the Personal Operating System (POS), preserving ownership, responsibilities and separation of concerns defined by the domain model.

The folder hierarchy provides the physical environment where POS entities are represented.

It never defines the conceptual architecture itself.

---

# Design Principles

## FS-001 — Domain-Driven Structure

The filesystem hierarchy follows the ownership defined by the POS Domain Model.

No folder hierarchy may contradict conceptual ownership.

---

## FS-002 — Stable Topology

The root structure should remain stable over time.

Most changes occur inside structural boundaries rather than modifying them.

---

## FS-003 — Shared Resources Remain Shared

Reusable knowledge, assets and resources belong to the Context rather than individual Workspaces.

The implementation should avoid unnecessary duplication.

---

## FS-004 — Workspace as Operational Hub

A Workspace exists to execute work.

It is not a repository of all information belonging to a Context.

---

## FS-005 — Predictable Navigation

Users should navigate the filesystem by understanding the conceptual model rather than memorizing folder locations.

---

# Structural Hierarchy

The implementation is organized into four structural levels.

```
Context
    ├── Shared Areas
    └── Workspaces
            └── Operational Areas
                    └── Entity Nodes
```

Each level has a single responsibility.

---

# Level 1 — Context

A Context represents the highest boundary of responsibility.

Every Context owns its reusable capabilities and operational environments.

Example:

```
Business/

Personal/

Learning/
```

---

# Level 2 — Shared Areas

Shared Areas contain information that belongs to the entire Context.

Typical areas include:

```
Assets/

Knowledge/

Resources/
```

These areas are shared by every Workspace inside the Context.

They are not duplicated.

---

# Level 3 — Workspaces

A Workspace represents an operational environment dedicated to a particular area of work.

Example:

```
Business/

    Workspaces/

        Marketing/

        AI Engineering/

        Administration/
```

Every Workspace belongs to exactly one Context.

---

# Level 4 — Operational Areas

Each Workspace contains only operational structures.

Typical areas include:

```
Inbox/

Operations/

Projects/

Archive/
```

These folders support execution.

They do not own reusable knowledge or shared assets.

---

# Reference Structure

```
Business/

    Assets/

    Knowledge/

    Resources/

    Workspaces/

        Marketing/

            Inbox/

            Operations/

            Projects/

            Archive/

        AI Engineering/

            Inbox/

            Operations/

            Projects/

            Archive/

Personal/

    Assets/

    Knowledge/

    Resources/

    Workspaces/

        Finance/

        Health/
```

---

# Folder Rules

## FR-001

Every filesystem begins with one or more Contexts.

---

## FR-002

Every Context owns its Shared Areas.

---

## FR-003

Every Workspace belongs to exactly one Context.

---

## FR-004

Workspaces contain operational work only.

---

## FR-005

Assets, Knowledge and Resources are never owned by a Workspace.

---

## FR-006

Inbox is temporary.

Captured items must eventually leave it.

---

## FR-007

Archive preserves historical material without modifying conceptual ownership.

---

## FR-008

Folders represent structural organization.

Conceptual ownership is always defined by the POS Domain Model.

---

# Scalability

The implementation grows horizontally.

Preferred:

```
Business/

    Assets/

    Knowledge/

    Resources/

    Workspaces/

        Marketing/

        Sales/

        Finance/

        AI Engineering/
```

Rather than:

```
Business/

    Marketing/

        Clients/

            Active/

                2026/

                    ...
```

Wide structures improve discoverability and reduce navigation depth.

---

# Portability

The folder hierarchy must remain compatible with any hierarchical filesystem.

The implementation must not rely on:

- symbolic links;
- proprietary metadata;
- cloud-provider features;
- operating-system-specific attributes.

---

# Validation

A folder structure is considered valid if:

- every Context owns its shared capabilities;
- every Workspace contains only operational structures;
- ownership matches the POS Domain Model;
- navigation remains predictable;
- reusable knowledge and assets are not unnecessarily duplicated.

---

# Architectural Observation

One of the most important implementation decisions is distinguishing between **shared capabilities** and **operational environments**.

A Context accumulates value through its Assets, Knowledge and Resources.

A Workspace consumes those capabilities to perform work.

This separation mirrors the POS architecture and prevents operational structures from becoming isolated repositories of information.

The filesystem therefore reflects the same distinction present in the conceptual model:

**Contexts accumulate capabilities.**

**Workspaces execute work.**