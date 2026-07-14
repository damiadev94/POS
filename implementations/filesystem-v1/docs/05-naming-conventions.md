# 05. Naming Conventions

## Purpose

This document defines the naming conventions used throughout the POS Filesystem Reference Implementation (PFSI).

Its objective is to establish a consistent, predictable and technology-independent naming system that minimizes ambiguity, improves discoverability and reduces cognitive load.

Naming conventions are part of the implementation layer.

They do not define the conceptual architecture of the Personal Operating System (POS).

---

# Design Principles

## NC-001 — Human Readability

Names should be understandable without requiring abbreviations or internal knowledge.

---

## NC-002 — Consistency

The same naming rules apply throughout the entire implementation.

Exceptions should be avoided.

---

## NC-003 — Stability

Names should remain stable over time.

Renaming should occur only when the conceptual identity changes.

---

## NC-004 — Minimal Information

Names should contain only the information necessary to identify the represented object.

Metadata belongs inside the file, not in its filename.

---

## NC-005 — Platform Neutrality

Names must remain compatible with every major operating system and cloud storage provider.

---

# General Rules

## Rule 1 — Use Natural Language

Preferred:

```
Brand Identity
```

Avoid:

```
brand_identity_v2_final_FINAL
```

---

## Rule 2 — One Name, One Meaning

Each name should represent a single conceptual object.

Avoid combining multiple concepts in one filename.

---

## Rule 3 — Avoid Technical Metadata

Avoid embedding information such as:

- dates
- versions
- authors
- status
- priorities

inside filenames whenever that information belongs to the conceptual model.

---

## Rule 4 — Avoid Special Characters

Recommended characters:

- letters
- numbers
- spaces
- hyphens (when necessary)

Avoid:

```
# % & * ? < > | \ :
```

---

## Rule 5 — Keep Names Short

Prefer concise descriptive names.

Good:

```
Website Redesign
```

Instead of:

```
Website Redesign Project For ABC Company 2026 Final
```

---

# Folder Naming

Folders should represent stable concepts.

Examples:

```
Marketing

Projects

Knowledge

Assets

Weekly Content
```

Avoid:

```
Stuff

Misc

Temporary

New Folder

Folder 1
```

---

# File Naming

Entity Files should describe the represented Entity.

Examples:

```
Content Strategy.md

Customer Onboarding.md

Email Sequence.md
```

Artifacts should describe the produced work.

Examples:

```
Homepage Mockup.fig

Brand Guidelines.pdf

Logo.svg
```

---

# Language

The implementation should use a single language consistently.

Mixing multiple languages inside the same implementation should be avoided.

---

# Singular vs Plural

Collections use plural.

Examples:

```
Projects/

Assets/

Knowledge/

Resources/
```

Individual entities use singular names.

Examples:

```
Website Redesign

Logo

Proposal Template

Customer Onboarding
```

---

# Capitalization

Use Title Case consistently.

Examples:

```
Content Marketing

Knowledge Base

Proposal Template
```

Avoid:

```
content marketing

CONTENT_MARKETING

contentMarketing
```

---

# Versioning

Version information should not normally appear in filenames.

Preferred:

```
Proposal Template.md
```

Instead of:

```
Proposal Template v3 FINAL FINAL.md
```

Version history belongs to the implementation process, not to the filename.

Exceptions may exist for published deliverables or contractual requirements.

---

# Reserved Names

The following names have architectural meaning and should remain reserved:

```
Inbox

Projects

Operations

Knowledge

Resources

Assets

Archive

Workspaces
```

These names should not be reused for unrelated purposes.

---

# Validation

A naming convention is considered valid if:

- names are predictable;
- names describe conceptual objects;
- names remain portable across platforms;
- names avoid unnecessary metadata;
- names minimize ambiguity.

---

# Architectural Observation

Naming is more than a cosmetic concern.

Within the PFSI, names are part of the navigation model.

A user should be able to infer the purpose of a folder or file before opening it.

Good naming reduces cognitive effort, improves discoverability and reinforces the conceptual architecture defined by the Personal Operating System.