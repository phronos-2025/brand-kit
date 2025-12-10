# P.H.R.O.N.O.S. Brand Kit Changelog

All notable changes to the brand kit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Animated ouroboros logo component (JavaScript + CSS)
- Logo demo page with usage examples
- Assets directory structure with organized folders
- Logo files: `phronos-logo.js`, `phronos-logo.css`
- Example: `logo-demo.html` showing all logo variants

## [1.0.0] - 2024-12-10

### Added
- Initial brand kit release
- `brand.json` - Machine-readable brand configuration
- `BRAND-GUIDE.md` - Human-readable brand guidelines
- `GLOSSARY.md` - Official terminology definitions
- `phronos-variables.css` - CSS custom properties
- `README.md` - Usage documentation

### Defined
- Primary color palette (Paper, Ink, Gold)
- Typography system (Cormorant Garamond, Fira Code)
- Spacing scale and design tokens
- Official organization name and mission
- Voice and tone guidelines
- Content standards

---

## Version History

### Types of Changes
- **Added** - New features, files, or assets
- **Changed** - Changes to existing functionality
- **Deprecated** - Features that will be removed
- **Removed** - Features that have been removed
- **Fixed** - Bug fixes or corrections
- **Security** - Security-related changes

### Versioning Rules

**MAJOR.MINOR.PATCH** (e.g., 1.0.0)

- **MAJOR** (1.x.x) - Breaking changes
  - Changing primary colors
  - Changing logo
  - Changing organization name
  - Removing core components

- **MINOR** (x.1.x) - Non-breaking additions
  - Adding new colors
  - Adding new components
  - Adding new assets
  - Expanding documentation

- **PATCH** (x.x.1) - Bug fixes and corrections
  - Fixing typos
  - Correcting hex values
  - Updating documentation clarity
  - Minor CSS tweaks

---

## How to Update This Changelog

When making changes:

1. Add entry under `[Unreleased]` section
2. Use format: `- Description of change ([#PR-number])`
3. When releasing, move Unreleased items to new version section
4. Add release date
5. Update version in all files

Example:
```markdown
## [Unreleased]

### Added
- Logo animation component ([#123])

### Changed
- Updated gold color for better accessibility ([#124])

## [1.1.0] - 2024-12-15

[moved from Unreleased]
```

---

## Migration Guides

When breaking changes occur, add migration instructions here:

### Migrating from 1.x to 2.x (Future)

*(No migrations yet - currently on v1.0.0)*

---

**For questions about versioning**: research@phronos.org
