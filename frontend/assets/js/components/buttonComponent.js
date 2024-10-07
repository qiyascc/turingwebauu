class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        try {
            this.createButton();
            this.applyStyles();
        } catch (error) {
            console.error("Constructor Error: ", error);
        }
    }

    createButton() {
        try {
            const type = this.getAttribute('type');
            const isUrlType = type === 'url';
            this.element = document.createElement(isUrlType ? 'a' : 'button');

            if (isUrlType) {
                this.element.href = this.getAttribute('href') || '#';
                this.element.target = '_blank';
                this.element.rel = 'noopener noreferrer';
            }

            this.createInnerContainer();
            this.element.appendChild(this.innerContainer);
            this.shadowRoot.appendChild(this.element);
        } catch (error) {
            console.error("createButton Error: ", error);
        }
    }

    createInnerContainer() {
        try {
            this.innerContainer = document.createElement('span');
            this.innerContainer.style.display = 'flex';
            this.innerContainer.style.alignItems = 'center';

            const position = this.getAttribute('position');
            const icon = this.getAttribute('icon');

            if (icon) {
                this.addIconToContainer(icon, position);
            } else {
                this.innerContainer.appendChild(document.createTextNode(this.textContent));
            }
        } catch (error) {
            console.error("createInnerContainer Error: ", error);
        }
    }

    addIconToContainer(icon, position) {
        try {
            const iconElement = document.createElement('span');
            iconElement.textContent = icon;

            if (position === 'left') {
                iconElement.style.marginRight = '0.5rem';
                this.innerContainer.appendChild(iconElement);
                this.innerContainer.appendChild(document.createTextNode(this.textContent));
            } else if (position === 'right') {
                iconElement.style.marginLeft = '0.5rem';
                this.innerContainer.appendChild(document.createTextNode(this.textContent));
                this.innerContainer.appendChild(iconElement);
            } else {
                console.warn(`Invalid 'position' attribute value '${position}'. Expected 'left' or 'right'.`);
                this.innerContainer.appendChild(document.createTextNode(this.textContent));
            }
        } catch (error) {
            console.error("addIconToContainer Error: ", error);
        }
    }

    applyStyles() {
        try {
            const styleConfig = this.getAttribute('style-config');
            if (styleConfig) {
                this.setCustomStyles(styleConfig);
            }

            this.element.style.display = 'inline-flex';
            this.element.style.alignItems = 'center';
            this.element.style.border = 'none';
            this.element.style.cursor = 'pointer';
            this.element.style.transition = 'background-color 0.3s';
            this.element.style.textDecoration = 'none';
        } catch (error) {
            console.error("applyStyles Error: ", error);
        }
    }

    setCustomStyles(styleConfig) {
        try {
            const styles = styleConfig.split(';').filter(Boolean);
            styles.forEach(style => {
                const [property, value] = style.split(':').map(s => s.trim());
                if (property && value) {
                    this.element.style[property] = value;
                }
            });
        } catch (error) {
            console.error("setCustomStyles Error: ", error);
        }
    }
}

customElements.define('custom-button', CustomButton);

