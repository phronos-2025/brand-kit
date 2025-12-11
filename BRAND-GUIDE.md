# P.H.R.O.N.O.S. Brand Guide

**Version 1.0.1** | Last Updated: December 10, 2024

This document defines the visual identity, voice, and standards for all P.H.R.O.N.O.S. properties.

---

## Mission & Identity

### Official Name
**P.H.R.O.N.O.S.**

### Full Name
**Public Hub for Resilient Ontological Navigation via Open Science**

### Tagline
**"Calibrating the Human Signal"**

### Mission Statement
P.H.R.O.N.O.S. is a digital observatory scanning the decline of strategic foresight in a high-noise world. We combine rigorous research with transparent methodologies to measure and understand how institutions navigate uncertainty.

### Core Values
1. **Epistemic Humility** - We acknowledge the limits of our knowledge
2. **Radical Transparency** - All methods, data, and limitations are public
3. **Open Science** - Research outputs are freely accessible
4. **Living Documents** - We update our work as evidence evolves
5. **Peer Review** - We invite critique and collaboration

---

## Visual Identity

### Logo Philosophy
The "lens icon" represents:
- **The Observatory**: Scientific observation and measurement
- **Focus**: Precision in a noisy world
- **Aperture**: Filtering signal from noise

### Color Palette

#### Primary Colors
- **Paper** (`#F2F0E9`) - Warm, inviting background suggesting analog research
- **Ink** (`#1A1A1A`) - Strong, authoritative text color
- **Gold** (`#B08D55`) - Accent color suggesting value, permanence, calibration

#### Semantic Colors
- **Alert Red** (`#CC5544`) - Warnings, critical status
- **Success Green** (`#22c55e`) - Living documents, positive states
- **Info Blue** (`#3b82f6`) - Stable status, informational

### Typography

#### Primary Font: Cormorant Garamond (Serif)
**Usage**: Body text, headings, elegant content  
**Weights**: 300 (Light), 400 (Regular), 600 (Semibold)  
**Why**: Academic gravitas with readability, suggests scholarship

#### Secondary Font: Fira Code (Monospace)
**Usage**: Navigation, labels, technical data, code  
**Weights**: 400 (Regular), 600 (Semibold)  
**Why**: Technical precision, observatory/scientific aesthetic

### Design Principles

1. **Grid Background**: Subtle coordinate system suggesting measurement and observation
2. **Brutalist Elements**: Bold borders, hard shadows, honest geometry
3. **Data-First**: Information density balanced with whitespace
4. **Academic Aesthetic**: Serious but not stuffy, rigorous but accessible

---

## Voice & Tone

### Overall Voice
**Academic yet accessible, precise yet humble, forward-looking yet grounded**

### Characteristics

#### ✓ Do
- Use precise terminology
- Acknowledge uncertainty explicitly
- Cite sources rigorously
- Explain limitations upfront
- Write in clear, active voice
- Use "we" for organizational voice
- Present evidence objectively

#### ✗ Don't
- Use buzzwords ("disruptive," "synergy," "game-changing")
- Make hyperbolic promises
- Hide limitations
- Use jargon without explanation
- Write in passive voice excessively
- Use corporate marketing language

### Example Phrases

**Good**:
> "Our data suggests a decline in institutional foresight capacity, though we acknowledge sampling limitations..."

**Bad**:
> "We're disrupting the future of strategic thinking with game-changing insights..."

---

## Content Standards

### Document Statuses

All research documents must display one of three statuses:

1. **Living** (Green) - Actively maintained, subject to updates
2. **Stable** (Blue) - Peer-reviewed, methodologically sound
3. **Archived** (Gray) - Historical snapshot, no longer updated

### Citation Requirements

Every substantive document must include:
- **Author attribution**
- **Date published**
- **Version number**
- **DOI or permanent URL**
- **Citation widget** (APA, MLA, BibTeX formats)

### Version Control

- Use semantic versioning (v1.0, v1.1, v2.0)
- Maintain changelog for all updates
- Archive previous versions as PDFs
- Credit contributors to updates

### Peer Review Protocol

1. Publish as "Living" with version < 1.0
2. Invite expert feedback openly
3. Update based on critique
4. Acknowledge all contributors
5. Mark as "Stable" when ready (v1.0+)

---

## Component Library

### Navigation
- **Height**: 80px minimum
- **Border**: 2px solid Ink
- **Background**: Paper
- **Font**: Fira Code, uppercase, 0.7rem
- **Logo**: Always includes lens icon + "P.H.R.O.N.O.S."

### Buttons

#### Primary Button
- Border: 2px solid Ink
- Background: Transparent → Ink (on hover)
- Shadow: 8px 8px 0px Gold (on hover)
- Transform: translate(-2px, -2px) (on hover)

#### Secondary Button
- Background: Ink
- Color: Paper
- Hover: Gold background, Ink text

### Data Panels
- Border: 2px solid Ink
- Shadow: 15px 15px 0px rgba(Ink, 0.1)
- Header: Dark bar with monospace label
- Grid layout for statistics

### Status Badges
- Border-left: 4px solid (semantic color)
- Background: 10% opacity of semantic color
- Font: Monospace, uppercase
- Icon: Pulsing dot (Living), checkmark (Stable), archive box (Archived)

---

## Writing Style

### Headings
- H1: Problem/Topic statement
- H2: Section questions or clear statements
- H3: Sub-points (monospace, uppercase, smaller)

Example:
```markdown
# The Foresight Decline Hypothesis

## What caused the decline in institutional planning horizons?

### FACTOR A: INFORMATION OVERLOAD
```

### Lists
- Use for enumeration only
- Prefer prose for arguments
- Keep bullets to 1-2 sentences

### Emphasis
- **Bold**: Key terms, important concepts
- *Italic*: Subtle emphasis, publication titles
- `Code`: Technical terms, variables, file names

---

## Technical Standards

### URLs
- Primary: `phronos.org`
- Observatory: `observatory.phronos.org`
- Instruments: `instruments.phronos.org`

### File Naming
- Lowercase with hyphens: `strategic-foresight.md`
- No spaces or underscores
- Semantic names: `constitution.md`, not `doc1.md`

### Image Guidelines
- Format: SVG (icons), WebP (photos), PNG (screenshots)
- Max width: 1600px
- Alt text: Always required
- Captions: Monospace font

### Code Formatting
- Language: TypeScript/JavaScript (Instruments), Python (Analysis)
- Style: Prettier (JS), Black (Python)
- Comments: Explain why, not what

---

## Multi-Site Consistency

### Cross-Site Elements

All three sites must include:
1. **Same navigation structure** (Observatory, Instruments, Contact)
2. **Identical footer** (status, version, license)
3. **Consistent color palette**
4. **Same typography stack**
5. **Lens icon logo**

### Site-Specific Adaptations

**Landing (phronos.org)**:
- Hero-focused layout
- Minimal content
- Gateway to other properties

**Observatory (observatory.phronos.org)**:
- Documentation-heavy
- Sidebar navigation
- Citation widgets on every article

**Instruments (instruments.phronos.org)**:
- Application UI
- Darker theme option
- Real-time data displays

---

## Accessibility

### Minimum Standards
- Color contrast: WCAG AA (4.5:1 for body text)
- Font size: Minimum 16px base
- Focus indicators: Visible on all interactive elements
- Alt text: All images
- Semantic HTML: Proper heading hierarchy

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Legal & Licensing

### Content License
**Creative Commons Attribution 4.0 (CC BY 4.0)**

You are free to:
- Share and adapt the content
- For any purpose, including commercially

You must:
- Give appropriate credit
- Indicate if changes were made
- Link to the license

### Code License
**MIT License**

Open source, permissive use with attribution.

### Data License
**CC0 1.0 (Public Domain Dedication)**

All datasets released with no restrictions.

---

## Updates & Governance

This brand guide is version-controlled. Propose changes via:
- GitHub pull requests
- Email to research@phronos.org
- Open discussion in issues

**Current Maintainer**: P.H.R.O.N.O.S. Core Team  
**Review Cycle**: Quarterly

---

## Quick Reference

### Essential Links
- Brand JSON: `brand.json`
- Glossary: `GLOSSARY.md`
- Component Examples: `examples/`

### Contact
- Email: research@phronos.org
- GitHub: github.com/phronos-2025

---

**This brand guide is itself a living document (v1.0.0)**
