# Brand Kit Maintenance Guide

This document explains how to update, version, and maintain the P.H.R.O.N.O.S. brand kit.

---

## Table of Contents

1. [Adding New Assets](#adding-new-assets)
2. [Updating Existing Files](#updating-existing-files)
3. [Version Control with Git](#version-control-with-git)
4. [Release Process](#release-process)
5. [Common Tasks](#common-tasks)
6. [File Organization](#file-organization)

---

## Adding New Assets

### Example: Adding a Logo Animation

Let's say you created a logo animation in another chat. Here's how to add it:

#### Step 1: Save the Animation File

```bash
# Copy your logo-animation.js to the brand kit
cp /path/to/logo-animation.js phronos-brand-kit/assets/animations/
```

#### Step 2: Document It in brand.json

Add entry to `brand.json`:

```json
{
  "assets": {
    "logos": {
      "animated": {
        "path": "/assets/animations/logo-animation.js",
        "type": "JavaScript",
        "description": "Animated P.H.R.O.N.O.S. logo with lens focusing effect",
        "usage": "Import and mount on landing page hero section",
        "dependencies": ["React"],
        "version": "1.0.0"
      },
      "static": {
        "svg": "/assets/logos/logo.svg",
        "png": "/assets/logos/logo.png"
      }
    }
  }
}
```

#### Step 3: Add Usage Documentation

Create `assets/animations/README.md`:

```markdown
# Logo Animation

## Usage

```javascript
import LogoAnimation from './logo-animation.js';

// In your React component
<LogoAnimation size={100} />
```

## Props
- `size` (number): Width/height in pixels
- `autoPlay` (boolean): Start animation on mount
- `loop` (boolean): Repeat animation

## Examples
See `/examples/logo-animation-demo.html`
```

#### Step 4: Update CHANGELOG.md

```markdown
## [Unreleased]

### Added
- Logo animation JavaScript component in `/assets/animations/`
- Animation usage documentation
```

#### Step 5: Commit Changes

```bash
git add assets/animations/logo-animation.js
git add assets/animations/README.md
git commit -m "Add animated logo component (v1.1.0-rc)"
```

---

## Updating Existing Files

### Example: Changing a Color

Let's say you want to adjust the gold color for better accessibility.

#### Step 1: Update brand.json

```json
{
  "colors": {
    "primary": {
      "gold": {
        "hex": "#B59555",  // Changed from #B08D55
        "rgb": "181, 149, 85",
        "usage": "Accents, highlights, interactive elements",
        "note": "Updated for WCAG AA compliance"
      }
    }
  }
}
```

#### Step 2: Update phronos-variables.css

```css
:root {
  --phronos-color-gold: #B59555; /* Updated for accessibility */
}
```

#### Step 3: Document Reason in CHANGELOG.md

```markdown
## [Unreleased]

### Changed
- Gold color updated from #B08D55 to #B59555 for WCAG AA compliance
```

#### Step 4: Update Version (if releasing)

In all files, bump version:
- `brand.json`: `"version": "1.1.0"`
- `BRAND-GUIDE.md`: `Version 1.1.0`
- `README.md`: `Version 1.1.0`

#### Step 5: Commit

```bash
git add brand.json phronos-variables.css CHANGELOG.md
git commit -m "Update gold color for accessibility (WCAG AA)"
```

---

## Version Control with Git

### Initial Setup (One Time)

```bash
# Navigate to brand kit folder
cd phronos-brand-kit

# Initialize git (if not done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial brand kit v1.0.0"

# Create GitHub repository
# Go to github.com/phronos-2025 and create "phronos-brand-kit" repo

# Connect to GitHub
git remote add origin https://github.com/phronos-2025/phronos-brand-kit.git
git branch -M main
git push -u origin main
```

### Daily Workflow

```bash
# Make changes to files
# ...

# Check what changed
git status

# Stage changes
git add <files>

# Commit with descriptive message
git commit -m "Description of what changed and why"

# Push to GitHub
git push
```

### Branching Strategy

For major changes, use branches:

```bash
# Create feature branch
git checkout -b feature/new-logo-animation

# Make changes, commit
git add assets/animations/logo-animation.js
git commit -m "Add logo animation component"

# Push branch
git push -u origin feature/new-logo-animation

# Create Pull Request on GitHub
# After review, merge to main
```

---

## Release Process

When you're ready to release a new version:

### Step 1: Finalize Changes

Make sure all changes are committed and tested.

### Step 2: Update Version Numbers

Update version in these files:
- `brand.json` → `"version": "1.1.0"`
- `BRAND-GUIDE.md` → `**Version 1.1.0**`
- `GLOSSARY.md` → `**Version 1.1.0**`
- `README.md` → `**Version 1.1.0**`
- `phronos-variables.css` → `Version 1.1.0` (in header comment)

### Step 3: Update CHANGELOG.md

Move unreleased items to new version section:

```markdown
## [1.1.0] - 2024-12-15

### Added
- Logo animation JavaScript component
- Animation usage documentation

### Changed
- Gold color updated for accessibility

## [1.0.0] - 2024-12-10

[previous release notes]
```

### Step 4: Commit Version Bump

```bash
git add .
git commit -m "Release v1.1.0"
```

### Step 5: Create Git Tag

```bash
# Create annotated tag
git tag -a v1.1.0 -m "Release version 1.1.0

Added:
- Logo animation component
- Animation documentation

Changed:
- Gold color for accessibility"

# Push tag to GitHub
git push origin v1.1.0
```

### Step 6: Create GitHub Release

1. Go to GitHub repository
2. Click "Releases" → "Create a new release"
3. Select tag `v1.1.0`
4. Title: "Version 1.1.0"
5. Copy changelog entries to description
6. Attach ZIP file of brand kit
7. Click "Publish release"

---

## Common Tasks

### Task: Add a New Font

1. **Update brand.json**:
```json
{
  "typography": {
    "fonts": {
      "display": {
        "name": "Space Grotesk",
        "usage": "Large headlines only",
        "googleFontsUrl": "..."
      }
    }
  }
}
```

2. **Update phronos-variables.css**:
```css
--phronos-font-display: 'Space Grotesk', sans-serif;
```

3. **Document in BRAND-GUIDE.md** (Fonts section)

4. **Update CHANGELOG.md** → "Added"

5. **Commit**: `git commit -m "Add Space Grotesk display font"`

---

### Task: Add a New Component Style

1. **Update brand.json** → `components` section

2. **Add CSS** to `phronos-variables.css`:
```css
.phronos-card {
  border: var(--phronos-border-width-default) solid var(--phronos-color-ink);
  padding: var(--phronos-padding-card);
  background: white;
}
```

3. **Create example** in `examples/card-demo.html`

4. **Update CHANGELOG.md** → "Added"

5. **Commit**: `git commit -m "Add card component styles"`

---

### Task: Fix a Typo

1. **Fix the typo** in the file

2. **Update CHANGELOG.md** → "Fixed" (under Patch version)

3. **Commit**: `git commit -m "Fix typo in glossary definition"`

4. **No version bump needed** for minor corrections between releases

---

## File Organization

### Current Structure

```
phronos-brand-kit/
├── brand.json              # Master config (machine-readable)
├── BRAND-GUIDE.md          # Human guide
├── GLOSSARY.md             # Terminology
├── phronos-variables.css   # CSS variables
├── README.md               # Usage docs
├── CHANGELOG.md            # Version history
├── MAINTENANCE.md          # This file
│
├── assets/                 # All brand assets
│   ├── logos/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   └── logo-white.svg
│   ├── animations/
│   │   ├── logo-animation.js
│   │   └── README.md
│   ├── icons/
│   │   └── lens-icon.svg
│   └── images/
│       └── og-image.png
│
└── examples/               # Usage examples
    ├── button-demo.html
    ├── logo-animation-demo.html
    └── color-palette.html
```

### Naming Conventions

**Files**: `kebab-case.ext`
- ✅ `logo-animation.js`
- ❌ `LogoAnimation.js`
- ❌ `logo_animation.js`

**Assets**: Descriptive names
- ✅ `logo-animated-dark.svg`
- ❌ `img1.svg`

**Versions**: Semantic versioning only
- ✅ `v1.0.0`, `v1.2.3`
- ❌ `version-1`, `v1`

---

## Git Commit Message Guidelines

### Format

```
<type>: <subject>

<body>

<footer>
```

### Types

- `feat`: New feature/asset
- `fix`: Bug fix or correction
- `docs`: Documentation only
- `style`: CSS/visual changes
- `refactor`: Code restructuring
- `chore`: Maintenance tasks

### Examples

**Good**:
```
feat: Add logo animation component

- Created animated SVG logo with lens focus effect
- Added React component wrapper
- Documented props and usage examples

Closes #42
```

**Bad**:
```
updated stuff
```

---

## Syncing Across Projects

After updating the brand kit, you need to update references in your three sites.

### Option 1: Git Submodule (Recommended)

In each site repository:

```bash
# Add brand kit as submodule
git submodule add https://github.com/phronos-2025/phronos-brand-kit.git brand-kit

# Update submodule to latest
git submodule update --remote

# Commit the submodule reference
git commit -m "Update brand kit to v1.1.0"
```

### Option 2: Manual Copy

```bash
# Copy files from brand kit
cp phronos-brand-kit/phronos-variables.css phronos-landing/styles/

# Commit in site repo
cd phronos-landing
git commit -m "Update to brand kit v1.1.0"
```

### Option 3: npm Package (Advanced)

Publish brand kit as npm package:

```json
// package.json in brand kit
{
  "name": "@phronos/brand-kit",
  "version": "1.1.0",
  "files": ["brand.json", "phronos-variables.css", "assets/"]
}
```

Then in sites:
```bash
npm install @phronos/brand-kit@latest
```

---

## Review Checklist

Before committing changes, verify:

- [ ] All version numbers updated
- [ ] CHANGELOG.md updated
- [ ] No broken links in documentation
- [ ] All new assets documented
- [ ] Examples provided for new components
- [ ] Git commit message is descriptive
- [ ] Changes tested in at least one site

---

## Emergency Rollback

If you need to undo changes:

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert to specific version
git checkout v1.0.0

# Create new branch from old version
git checkout -b hotfix/revert-gold-color v1.0.0
```

---

## Questions?

- **Technical issues**: Open issue on GitHub
- **Brand decisions**: Email research@phronos.org
- **Quick questions**: Check README.md first

---

**This guide is part of the brand kit (v1.1.0)**
