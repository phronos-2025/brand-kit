/**
 * p.h.r.o.n.o.s. Ouroboros Logo Component
 * Public Hub for Resilient Ontology, Noesis, and Observational Science
 */

class PhronosLogo {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            theme: options.theme || 'dark', // 'dark' or 'light'
            showText: options.showText !== false, // default true
            showDots: options.showDots !== false, // default true
            size: options.size || 320 // default 320px
        };
        
        this.render();
    }

    render() {
        if (!this.container) {
            console.error('Container not found');
            return;
        }

        const themeClass = this.options.theme === 'light' ? 'light' : '';
        
        this.container.innerHTML = `
            <div class="phronos-logo ${themeClass}" style="width: ${this.options.size}px; height: ${this.options.size}px;">
                <div class="phronos-rotating-elements">
                    <!-- The snake's body - circular path -->
                    <div class="phronos-snake-body">
                        <svg viewBox="0 0 320 320">
                            <circle class="phronos-body-circle" cx="160" cy="160" r="125" />
                        </svg>
                    </div>

                    <!-- Head chevron -->
                    <div class="phronos-snake-head">
                        <div class="phronos-head-chevron"></div>
                    </div>

                    <!-- Tail chevron -->
                    <div class="phronos-snake-tail">
                        <div class="phronos-tail-chevron"></div>
                    </div>
                </div>

                ${this.options.showText || this.options.showDots ? `
                <!-- Center text (static) -->
                <div class="phronos-logo-center">
                    ${this.options.showText ? `
                    <div class="phronos-logo-acronym">
                        <span class="period">.</span>p<span class="period">.</span>h<span class="period">.</span>r<span class="period">.</span>o<span class="period">.</span>n<span class="period">.</span>o<span class="period">.</span>s<span class="period">.</span>
                    </div>
                    ` : ''}
                    ${this.options.showDots ? `
                    <div class="phronos-logo-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    ` : ''}
                </div>
                ` : ''}
            </div>
        `;
    }

    setTheme(theme) {
        this.options.theme = theme;
        this.render();
    }

    setSize(size) {
        this.options.size = size;
        this.render();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PhronosLogo;
}

// Global namespace
if (typeof window !== 'undefined') {
    window.PhronosLogo = PhronosLogo;
}
