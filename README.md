# P.H.R.O.N.O.S. Brand Kit

**Version 1.0.0** | Last Updated: December 10, 2025

This repository contains the master configuration files for P.H.R.O.N.O.S. brand identity, ensuring consistency across all properties (landing page, observatory, instruments).

## 📁 What's Inside

### Core Files

1. **`brand.json`** - Machine-readable brand configuration
   - Colors (hex, RGB, usage)
   - Typography (fonts, sizes, hierarchy)
   - Spacing, borders, shadows
   - Component specifications
   - SEO defaults
   - URLs and domains

2. **`BRAND-GUIDE.md`** - Human-readable brand guide
   - Mission and values
   - Visual identity philosophy
   - Voice and tone guidelines
   - Content standards
   - Component library
   - Writing style
   - Accessibility requirements

3. **`GLOSSARY.md`** - Official terminology
   - Organization name and expansion
   - Core concept definitions
   - Document type statuses
   - Methodology terms
   - Common mistakes to avoid

4. **`phronos-variables.css`** - CSS custom properties
   - Importable stylesheet
   - All design tokens as CSS variables
   - Utility classes
   - Component base styles

## 🎯 Purpose

### Single Source of Truth
All brand elements are defined once, here. No more:
- ❌ Hardcoded colors scattered across files
- ❌ Inconsistent typography between sites
- ❌ Divergent terminology
- ❌ Outdated mission statements

### AI Assistant Ready
These files are optimized for AI assistants (Claude, GPT-4, Gemini) to:
- ✅ Reference exact brand specifications
- ✅ Generate consistent UI components
- ✅ Write on-brand content
- ✅ Maintain terminology accuracy

### Developer Friendly
Import configs programmatically:

```javascript
// In JavaScript/TypeScript
import brand from './brand.json';

const primaryColor = brand.colors.primary.ink.hex; // "#1A1A1A"
```

```css
/* In CSS */
@import url('./phronos-variables.css');

.my-component {
  color: var(--phronos-color-ink);
  font-family: var(--phronos-font-serif);
}
```

## 🚀 Usage

### For Developers

1. **Clone or download** this brand kit
2. **Place in project root** or shared location
3. **Import** the relevant file(s):
   - CSS projects: Import `phronos-variables.css`
   - JS projects: Import `brand.json`
   - Documentation: Link to `BRAND-GUIDE.md`

### For Content Creators

1. **Read** `BRAND-GUIDE.md` for voice and style
2. **Reference** `GLOSSARY.md` for terminology
3. **Check** `brand.json` for exact colors/fonts

### For AI Assistants

When working on P.H.R.O.N.O.S. projects:

**Prompt example**:
> "Using the brand specifications in `brand.json` and `BRAND-GUIDE.md`, create a new landing page section for..."

**What to reference**:
- Colors: `brand.json` → `colors` section
- Typography: `brand.json` → `typography` section
- Voice: `BRAND-GUIDE.md` → "Voice & Tone" section
- Terms: `GLOSSARY.md` → Look up specific definitions

## 📦 Integration Examples

### Example 1: React Component

```jsx
import brand from './brand-kit/brand.json';

export function Button({ children, variant = 'primary' }) {
  const styles = {
    backgroundColor: variant === 'primary' 
      ? 'transparent' 
      : brand.colors.primary.ink.hex,
    color: variant === 'primary'
      ? brand.colors.primary.ink.hex
      : brand.colors.primary.paper.hex,
    fontFamily: brand.typography.fonts.mono.name,
    border: `2px solid ${brand.colors.primary.ink.hex}`,
  };
  
  return <button style={styles}>{children}</button>;
}
```

### Example 2: Docusaurus Config

```javascript
// docusaurus.config.js
import brand from '../brand-kit/brand.json';

export default {
  title: brand.organization.name,
  tagline: brand.organization.tagline,
  url: brand.domains.observatory,
  
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: brand.organization.name,
    },
  },
  
  // Custom CSS
  stylesheets: [
    {
      href: '../brand-kit/phronos-variables.css',
    },
  ],
};
```

### Example 3: Tailwind Config

```javascript
// tailwind.config.js
import brand from './brand-kit/brand.json';

export default {
  theme: {
    extend: {
      colors: {
        paper: brand.colors.primary.paper.hex,
        ink: brand.colors.primary.ink.hex,
        gold: brand.colors.primary.gold.hex,
      },
      fontFamily: {
        serif: [brand.typography.fonts.serif.name, ...brand.typography.fonts.serif.fallback.split(', ')],
        mono: [brand.typography.fonts.mono.name, ...brand.typography.fonts.mono.fallback.split(', ')],
      },
    },
  },
};
```

## 📖 Where to Use What

### Landing Page (phronos.org)
- Import: `phronos-variables.css`
- Reference: `BRAND-GUIDE.md` → "Visual Identity"
- Check: `brand.json` → `domains.landing`

### Observatory (observatory.phronos.org)
- Import: `phronos-variables.css` in custom.css
- Use: Status badges from `brand.json` → `components.statusBadge`
- Follow: Content standards in `BRAND-GUIDE.md`

### Instruments (instruments.phronos.org)
- Import: `brand.json` for theme configuration
- Use: Component specs from `brand.json` → `components`
- Reference: Technical standards in `BRAND-GUIDE.md`

## 🔄 Version Control

This brand kit is itself version-controlled:

- **Semantic versioning**: Major.Minor.Patch
- **Changelog**: Track all updates in git history
- **Backward compatibility**: Major version changes only when breaking

### Current Version: 1.0.0

**Update process**:
1. Propose changes via pull request
2. Review by core team
3. Update version number
4. Commit with clear message
5. Tag release in git

## 🎨 Customization Guidelines

### ✅ Allowed
- Site-specific layouts (as long as they use brand colors/fonts)
- Additional semantic colors (for new features)
- Extended spacing scale (maintain ratio)
- New component variants (based on existing patterns)

### ⛔ Not Allowed
- Changing primary color palette
- Using different fonts
- Altering the logo
- Redefining core terminology
- Modifying mission statement (without governance approval)

## 🤝 Contributing

To propose brand updates:

1. **Fork** this repository
2. **Make changes** with clear rationale
3. **Test** across all three sites
4. **Submit PR** with:
   - What changed
   - Why it's needed
   - Impact on existing sites
5. **Await review** from core team

## 📋 Checklist for New Sites/Features

When creating new P.H.R.O.N.O.S. properties:

- [ ] Import `phronos-variables.css` or `brand.json`
- [ ] Use exact color values from brand kit
- [ ] Use specified fonts (Cormorant Garamond + Fira Code)
- [ ] Include lens icon logo
- [ ] Reference official terminology from `GLOSSARY.md`
- [ ] Follow voice guidelines from `BRAND-GUIDE.md`
- [ ] Maintain grid background aesthetic
- [ ] Include version number in footer
- [ ] Link to other P.H.R.O.N.O.S. properties

## 📞 Questions?

- **Email**: research@phronos.org
- **GitHub Issues**: For technical brand kit questions
- **Documentation**: See individual markdown files for details

---

## Quick Links

- [Brand Guide (Human)](./BRAND-GUIDE.md)
- [Glossary (Terms)](./GLOSSARY.md)
- [Brand Config (Machine)](./brand.json)
- [CSS Variables](./phronos-variables.css)

---

**This brand kit is maintained by the P.H.R.O.N.O.S. Core Team**

License: CC BY 4.0 (Documentation) | MIT (Code)
