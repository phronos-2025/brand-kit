# p.h.r.o.n.o.s. Ouroboros Logo

Animated logo component for the Public Hub for Resilient Ontology, Noesis, and Observational Science.

## Files

- `phronos-logo.css` - Styles for the logo component
- `phronos-logo.js` - JavaScript component for easy integration
- `phronos-logo-demo.html` - Demo page showing usage examples

## Quick Start

### 1. Include the CSS and JS files

```html
<link rel="stylesheet" href="phronos-logo.css">
<script src="phronos-logo.js"></script>
```

### 2. Add Google Fonts (for Fira Code)

```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

### 3. Create a container and initialize

```html
<div id="logo-container"></div>

<script>
    new PhronosLogo('logo-container', {
        theme: 'dark',    // 'dark' or 'light'
        showText: true,   // show ".p.h.r.o.n.o.s." text
        showDots: true,   // show six pulsing dots
        size: 320         // size in pixels
    });
</script>
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | `'dark'` | Color theme: `'dark'` or `'light'` |
| `showText` | boolean | `true` | Display the ".p.h.r.o.n.o.s." text |
| `showDots` | boolean | `true` | Display the six pulsing dots |
| `size` | number | `320` | Logo size in pixels |

## Methods

```javascript
const logo = new PhronosLogo('logo-container');

// Change theme
logo.setTheme('light');

// Change size
logo.setSize(400);
```

## CSS Variables

You can customize colors by overriding these CSS variables:

```css
:root {
    --paper: #F2F0E9;  /* Light background color */
    --ink: #1A1A1A;    /* Dark text color */
    --gold: #B08D55;   /* Gold accent color */
}
```

## Examples

### Dark Mode (Default)
```javascript
new PhronosLogo('container', { theme: 'dark' });
```

### Light Mode
```javascript
new PhronosLogo('container', { theme: 'light' });
```

### Icon Only (No Text)
```javascript
new PhronosLogo('container', {
    showText: false,
    showDots: false
});
```

### Custom Size
```javascript
new PhronosLogo('container', { size: 200 });
```

## Design Details

- **Animation**: The circle and chevrons rotate continuously in a 20-second loop
- **Typography**: Fira Code monospace font
- **Colors**: Gold (#B08D55) for the ouroboros, Paper (#F2F0E9) or Ink (#1A1A1A) for text
- **Dimensions**: Default 320px × 320px (customizable)
- **Six Dots**: Represent the six psychometric variables with staggered pulse animations

## Brand Alignment

This logo follows the p.h.r.o.n.o.s. brand kit guidelines:
- Brutalist aesthetic with sharp geometric forms
- Dual-state design (Light Mode: The Map Room, Dark Mode: The Sensor Array)
- Transcendental anchor: Ouroboros (infinity, self-reference, feedback loops)
- Gold accent color for value and action
- Monospace typography for system/technical elements
