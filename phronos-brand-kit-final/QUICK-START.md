# Brand Kit Management - Quick Start

This is a simplified guide to get you started with maintaining the P.H.R.O.N.O.S. brand kit.

---

## 📦 Initial Setup (One Time)

### 1. Set Up Git Repository

```bash
# Navigate to your brand kit folder
cd phronos-brand-kit-updated

# Initialize git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial brand kit v1.0.0"
```

### 2. Connect to GitHub

```bash
# On GitHub: Create new repository called "phronos-brand-kit"
# (Make it Public)

# Back in terminal:
git remote add origin https://github.com/phronos-2025/phronos-brand-kit.git
git branch -M main
git push -u origin main
```

**Done!** Your brand kit is now version controlled.

---

## ✏️ Making Changes

### Example 1: Adding Your Logo Animation

You have a logo animation file from another chat. Here's what to do:

```bash
# 1. Copy the file
cp /path/to/your/logo-animation.js assets/animations/

# 2. Open CHANGELOG.md and add under [Unreleased]:
#    ### Added
#    - Logo animation component

# 3. Commit the change
git add assets/animations/logo-animation.js
git add CHANGELOG.md
git commit -m "Add animated logo component"

# 4. Push to GitHub
git push
```

### Example 2: Changing a Color

```bash
# 1. Edit brand.json (change the hex value)
# 2. Edit phronos-variables.css (change the CSS variable)
# 3. Add to CHANGELOG.md under [Unreleased]:
#    ### Changed
#    - Updated gold color for accessibility

# 4. Commit
git add brand.json phronos-variables.css CHANGELOG.md
git commit -m "Update gold color for WCAG AA compliance"
git push
```

### Example 3: Fixing a Typo

```bash
# 1. Fix the typo in the file
# 2. Add to CHANGELOG.md under [Unreleased]:
#    ### Fixed
#    - Corrected spelling in GLOSSARY.md

# 3. Commit
git add GLOSSARY.md CHANGELOG.md
git commit -m "Fix typo in strategic foresight definition"
git push
```

---

## 🎯 Releasing a New Version

When you're ready to "officially" release updates:

### Step 1: Decide Version Number

- **1.0.x** → Bug fixes, typos (PATCH)
- **1.x.0** → New features, new assets (MINOR)
- **x.0.0** → Breaking changes, major redesign (MAJOR)

Example: Adding logo animation = **1.1.0** (MINOR)

### Step 2: Update Version Numbers

Edit these files and change version to (example) `1.1.0`:
- `brand.json` → Line 2: `"version": "1.1.0"`
- `BRAND-GUIDE.md` → Top: `**Version 1.1.0**`
- `GLOSSARY.md` → Top: `**Version 1.1.0**`
- `README.md` → Top: `**Version 1.1.0**`

### Step 3: Update CHANGELOG.md

Move [Unreleased] items to new version:

```markdown
## [1.1.0] - 2024-12-15

### Added
- Logo animation component

## [1.0.0] - 2024-12-10
...
```

### Step 4: Commit and Tag

```bash
# Commit version bump
git add .
git commit -m "Release v1.1.0"

# Create git tag
git tag -a v1.1.0 -m "Version 1.1.0 - Added logo animation"

# Push everything
git push
git push --tags
```

### Step 5: Create GitHub Release (Optional but Nice)

1. Go to your GitHub repo
2. Click "Releases"
3. Click "Create a new release"
4. Choose tag `v1.1.0`
5. Title: "Version 1.1.0"
6. Description: Copy from CHANGELOG
7. Attach the ZIP file
8. Click "Publish release"

---

## 🔄 Using Brand Kit in Your Sites

### Option 1: Download and Copy (Simplest)

```bash
# In each site project
cp -r /path/to/phronos-brand-kit/phronos-variables.css ./styles/
cp -r /path/to/phronos-brand-kit/assets ./

# Then reference in your HTML/CSS
@import url('./styles/phronos-variables.css');
```

### Option 2: Git Submodule (Recommended)

```bash
# In your landing page repo
git submodule add https://github.com/phronos-2025/phronos-brand-kit.git brand-kit

# Now you can reference files:
# <link rel="stylesheet" href="brand-kit/phronos-variables.css">

# To update to latest brand kit:
git submodule update --remote brand-kit
```

---

## 📋 Daily Workflow Cheat Sheet

### When you want to add/change something:

1. **Make the change** in the appropriate file
2. **Document it** in CHANGELOG.md under [Unreleased]
3. **Commit** with descriptive message
4. **Push** to GitHub

### When ready to release:

1. **Update version numbers** in all files
2. **Move CHANGELOG** entries from Unreleased to new version
3. **Commit**: `git commit -m "Release vX.X.X"`
4. **Tag**: `git tag -a vX.X.X -m "Version X.X.X"`
5. **Push**: `git push && git push --tags`

---

## 🆘 Common Issues

### "I made a mistake in my last commit"

```bash
# If you haven't pushed yet:
git reset --soft HEAD~1  # Undo commit, keep changes
# Fix the issue, then commit again

# If you already pushed:
# Make a new commit fixing it
git add .
git commit -m "Fix: Correct version number"
git push
```

### "I need to go back to an old version"

```bash
# See all versions
git tag

# Check out old version
git checkout v1.0.0

# To go back to latest
git checkout main
```

### "GitHub Desktop vs Command Line"

You can do everything in GitHub Desktop instead:
- **Commit** = Fill in summary and click "Commit"
- **Push** = Click "Push origin"
- **Tag** = (Harder in Desktop, use command line: `git tag`)

---

## 📚 Full Documentation

For detailed information, see:
- **MAINTENANCE.md** - Complete maintenance guide
- **CHANGELOG.md** - Version history
- **README.md** - Usage documentation

---

## ✅ Checklist: Adding Logo Animation

Let's use your specific case as an example:

- [ ] Copy `logo-animation.js` to `assets/animations/`
- [ ] Open `CHANGELOG.md`, add under [Unreleased]: `- Logo animation component`
- [ ] `git add assets/animations/logo-animation.js`
- [ ] `git add CHANGELOG.md`
- [ ] `git commit -m "Add animated logo component"`
- [ ] `git push`

That's it! No need to release a new version immediately. When you're ready:

- [ ] Update all version numbers to `1.1.0`
- [ ] Move CHANGELOG entry to `[1.1.0]` section
- [ ] `git commit -m "Release v1.1.0"`
- [ ] `git tag -a v1.1.0 -m "Version 1.1.0"`
- [ ] `git push && git push --tags`

---

**Questions? See MAINTENANCE.md or email research@phronos.org**
