# Logo Animation

## Files in This Directory

- `logo-animation.js` - The animated logo component (add your file here)
- `README.md` - This documentation file

---

## How to Add Your Animation

1. **Get the animation file** from your other chat
2. **Save it** as `logo-animation.js` in this directory
3. **Update the brand kit version**:
   - Update `CHANGELOG.md` under `[Unreleased]`
   - Add entry: `- Logo animation component`

---

## Expected File Structure

Your `logo-animation.js` should export a reusable component:

### Vanilla JavaScript Example

```javascript
// logo-animation.js
export function createLogoAnimation(container, options = {}) {
  const {
    size = 100,
    autoPlay = true,
    loop = true,
    color = '#1A1A1A'
  } = options;
  
  // Create SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 100 100');
  
  // Add your animation logic here
  // ...
  
  container.appendChild(svg);
  
  return {
    play: () => { /* start animation */ },
    pause: () => { /* pause animation */ },
    destroy: () => { container.removeChild(svg); }
  };
}
```

### React Example

```javascript
// logo-animation.js
import React, { useEffect, useRef } from 'react';

export function LogoAnimation({ size = 100, autoPlay = true, loop = true }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create and animate SVG
    const svg = createAnimatedSVG(size);
    containerRef.current.appendChild(svg);
    
    if (autoPlay) {
      // Start animation
    }
    
    return () => {
      // Cleanup
      containerRef.current?.removeChild(svg);
    };
  }, [size, autoPlay, loop]);
  
  return <div ref={containerRef} />;
}
```

---

## Usage

### In HTML (Vanilla JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Logo Animation Demo</title>
</head>
<body>
  <div id="logo-container"></div>
  
  <script type="module">
    import { createLogoAnimation } from './logo-animation.js';
    
    const container = document.getElementById('logo-container');
    const animation = createLogoAnimation(container, {
      size: 200,
      autoPlay: true,
      loop: true
    });
  </script>
</body>
</html>
```

### In React

```javascript
import { LogoAnimation } from './assets/animations/logo-animation';

function LandingPage() {
  return (
    <div className="hero">
      <LogoAnimation size={150} autoPlay loop />
      <h1>P.H.R.O.N.O.S.</h1>
    </div>
  );
}
```

### In Landing Page (phronos.org)

Replace the static lens icon with:

```html
<nav>
  <div class="logo">
    <div id="animated-logo"></div>
    <span>P.H.R.O.N.O.S.</span>
  </div>
</nav>

<script type="module">
  import { createLogoAnimation } from '../phronos-brand-kit/assets/animations/logo-animation.js';
  
  const logo = document.getElementById('animated-logo');
  createLogoAnimation(logo, { size: 14 });
</script>
```

---

## Animation Specifications

### Requirements

- **File format**: JavaScript (ES6 modules)
- **Dependencies**: None preferred, React optional
- **Performance**: Should run at 60fps
- **Accessibility**: Include `aria-label` on SVG
- **File size**: Target < 10KB

### Design Principles

Based on `BRAND-GUIDE.md`:

- **Colors**: Use `--phronos-color-ink` (#1A1A1A) and `--phronos-color-gold` (#B08D55)
- **Style**: Clean, precise, scientific aesthetic
- **Motion**: Smooth, purposeful (like a lens focusing)
- **Duration**: 1.5-2 seconds for full animation
- **Easing**: `cubic-bezier(0.4, 0, 0.6, 1)` (brand standard)

### Recommended Animation Ideas

- Lens focusing effect (aperture closing/opening)
- Observatory telescope movement
- Signal waveform visualization
- Grid coordinates converging to center
- Calibration crosshairs aligning

---

## Testing

Before committing:

1. **Test in all three sites**:
   - Landing page (phronos.org)
   - Observatory header (observatory.phronos.org)
   - Instruments nav (instruments.phronos.org)

2. **Performance**:
   - No dropped frames
   - Smooth on mobile devices
   - Doesn't block page load

3. **Accessibility**:
   - Respects `prefers-reduced-motion`
   - Has descriptive aria-label
   - Works with screen readers

4. **Cross-browser**:
   - Chrome
   - Firefox
   - Safari
   - Edge

---

## Version History

- **v1.0.0** (Pending) - Initial animated logo component

---

## Questions?

If you need help integrating your animation:

1. Upload the file to this directory
2. Update CHANGELOG.md
3. Test in one site first
4. Commit with: `git commit -m "Add logo animation component"`

For technical questions: research@phronos.org
