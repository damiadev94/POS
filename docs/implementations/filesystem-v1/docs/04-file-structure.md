# 04. File Structure

## Purpose

This document defines the internal structure of files within the POS Filesystem Reference Implementation (PFSI).

Its purpose is to establish a consistent, portable and predictable format for representing conceptual entities using files.

This document does not define folder hierarchy or entity ownership.

Instead, it defines how information is physically organized inside individual files.

---

# Design Principles

## FS-001 — Self-Contained Representation

Every file should contain enough information to be understood independently from its location whenever possible.

---

## FS-002 — Human Readable

All implementation files should be readable and editable without specialized software.

Plain text formats are preferred.

---

## FS-003 — Portable Formats

File formats should remain compatible across operating systems and applications.

Whenever possible, open standards should be used.

---

## FS-004 — Minimal Metadata

Files should contain only the metadata necessary to represent the conceptual model.

Implementation-specific metadata should be avoided.

---

## FS-005 — Separation of Content and Structure

The filesystem provides organization.

Files provide information.

Neither should replace the responsibility of the other.

---

# Supported File Types

The reference implementation distinguishes between two categories.

## Entity Files

Files that directly represent POS entities.

Examples:

- Task
- Knowledge
- Resource
- Idea
- Discipline

Preferred format:

```
Markdown (.md)
```

---

## Artifact Files

Files that represent the actual work products managed by the POS.

Examples:

- PDF
- DOCX
- XLSX
- AI
- PSD
- MP4
- PNG
- JPG
- SVG

Artifacts are implementation-independent.

The POS manages them without imposing their internal format.

---

# Standard Entity File Structure

Every Entity File should follow a common structure.

Example:

```markdown
# Title

## Metadata

ID:
State:
Created:
Updated:

---

## Description

...

---

## Related Entities

...

---

## Notes

...
```

This structure provides consistency while remaining lightweight.

---

# Metadata

Metadata belongs to the conceptual entity rather than to the filesystem.

Typical metadata includes:

| Field | Purpose |
|--------|----------|
| ID | Stable conceptual identifier |
| State | Current lifecycle state |
| Created | Creation date |
| Updated | Last modification |
| Owner | Conceptual owner |
| References | Related entities |

Metadata should remain human-readable.

---

# Binary Files

Binary files are treated as Artifacts.

Examples:

```
logo.ai

presentation.pptx

video.mp4

render.psd
```

The implementation does not define their internal structure.

Only their relationship with the conceptual domain.

---

# Markdown

Markdown is the preferred documentation format because it is:

- portable;
- human-readable;
- version-control friendly;
- platform independent;
- future-proof.

Markdown files should represent conceptual information rather than presentation.

---

# File Rules

## FR-001

Every Entity File represents exactly one conceptual Entity.

---

## FR-002

Artifacts never redefine the conceptual model.

They only materialize work.

---

## FR-003

Files should remain understandable without proprietary software whenever possible.

---

## FR-004

Implementation metadata should never replace conceptual metadata.

---

## FR-005

The content of a file should remain independent from its physical location.

Moving a file should not alter its conceptual meaning.

---

# Portability

The implementation should prefer formats with long-term compatibility.

Recommended:

- Markdown
- PDF
- SVG
- PNG
- JPG
- TXT
- CSV

Acceptable when required:

- DOCX
- XLSX
- AI
- PSD
- FIG
- MP4

The POS does not restrict artifact formats.

It only recommends formats that maximize portability.

---

# Validation

A file structure is considered valid if:

- every Entity File follows a consistent layout;
- metadata remains understandable;
- artifacts remain independent from implementation details;
- files preserve conceptual identity;
- information remains portable across platforms.

---

# Architectural Observation

Folders provide the physical topology of the implementation.

Files provide the conceptual representation of individual entities.

Artifacts provide the tangible outputs managed by those entities.

This separation allows the filesystem to remain structurally simple while supporting a rich conceptual model.

The implementation therefore distinguishes three independent layers:

- Structure (Folders)
- Representation (Entity Files)
- Content (Artifacts)

Each layer has a single responsibility and evolves independently.