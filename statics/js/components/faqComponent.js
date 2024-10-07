class FAQList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        try {
            this.createTabs();
            this.createModuleCards();
            this.applyStyles();
        } catch (error) {
            console.error("Constructor Error: ", error);
        }
    }

    createTabs() {
        try {
            // Create tabs container
            this.tabsContainer = document.createElement('div');
            this.tabsContainer.classList.add('tabs-container');

            // Get modules data from attribute
            this.modulesData = JSON.parse(this.getAttribute('modules') || '{}');
            const categories = Object.keys(this.modulesData);

            // If there's only one category and it's 'general', skip creating tabs
            if (categories.length === 1 && categories[0] === 'general') {
                this.currentTab = 'general';
                this.tabsContainer.classList.add('bor-none');
            } else {
                // Create tabs for each category
                categories.forEach((category, index) => {
                    this.createTab(category, category === 'general' ? '' : category);

                    // Add the default active class to the first tab (Fundamentals)
                    if (index === 0) {
                        this.tabsContainer.children[0].classList.add('active');
                    }
                });

                // Default to the first tab
                this.currentTab = categories[0];
            }

            this.shadowRoot.appendChild(this.tabsContainer);
        } catch (error) {
            console.error("createTabs Error: ", error);
        }
    }


    createTab(tabId, tabText) {
        try {
            const tab = document.createElement('button');
            tab.classList.add('tab-button');
            tab.textContent = tabText;
            tab.setAttribute('data-tab', tabId);

            tab.addEventListener('click', () => this.switchTab(tabId));

            this.tabsContainer.appendChild(tab);
        } catch (error) {
            console.error(`createTab (${tabId}) Error: `, error);
        }
    }

    switchTab(tabId) {
        try {
            if (this.currentTab === tabId) return; // No need to switch if the same tab is clicked

            // Update current tab
            this.currentTab = tabId;

            // Update tab button active state
            this.shadowRoot.querySelectorAll('.tab-button').forEach(button => {
                button.classList.toggle('active', button.getAttribute('data-tab') === tabId);
            });

            // Update displayed modules
            this.updateModuleCards();
        } catch (error) {
            console.error("switchTab Error: ", error);
        }
    }

    createModuleCards() {
        try {
            // Create module cards container
            this.moduleContainer = document.createElement('div');
            this.moduleContainer.classList.add('module-container');

            this.shadowRoot.appendChild(this.moduleContainer);

            // Initially show modules for the default tab
            this.updateModuleCards();
        } catch (error) {
            console.error("createModuleCards Error: ", error);
        }
    }

    updateModuleCards() {
        try {
            // Clear current module cards
            this.moduleContainer.innerHTML = '';

            const modulesData = this.modulesData[this.currentTab] || [];

            modulesData.forEach(({ question, answer }) => {
                const moduleCard = document.createElement('div');
                moduleCard.classList.add('module-card');

                const header = document.createElement('h2');
                header.classList.add('inter-style-16-100-medium', 'black-dark');

                const img = document.createElement('img');
                img.src = this.getAttribute('header-icon') || '../assets/images/Plus-Icon.png';
                img.alt = 'plus icon';

                const questionText = document.createTextNode(question);
                header.appendChild(img);
                header.appendChild(questionText);

                const paragraph = document.createElement('p');
                paragraph.classList.add('inter-style-14-100-regular', 'white-dark');
                paragraph.textContent = answer;

                moduleCard.appendChild(header);
                moduleCard.appendChild(paragraph);

                this.moduleContainer.appendChild(moduleCard);
            });
        } catch (error) {
            console.error("updateModuleCards Error: ", error);
        }
    }

    applyStyles() {
        try {
            const styleConfig = this.getAttribute('style-config');
            const buttonStyleConfig = this.getAttribute('button-style-config');

            // Apply component-specific styles
            if (styleConfig) {
                this.setCustomStyles(styleConfig);
            }

            // Apply button-specific styles
            if (buttonStyleConfig) {
                this.buttonStyleConfig = buttonStyleConfig;
            }

            // Default styles
            const style = document.createElement('style');
            style.textContent = `
                        .tabs-container {
                                display: inline-flex;
                                margin-bottom: 24px;
                                padding: 5px;
                                align-items: center;
                                gap: 8px;
                                border-radius: 8px;
                                border: 1px solid var(--white-medium);
                                background-color: var(--white-solid);
                                padding-right: 9px;
                        }
                        .bor-none{display:none}
                        .tab-button {
                                display: flex;
                                height: 36px;
                                padding: 8px 12px;
                                justify-content: center;
                                align-items: center;
                                gap: 8px;
                                border-radius: 6px;
                                border: 1px solid var(--white-medium);border:none;
                                background: var(--white-solid);
                                font-family: var(--font-primary);
                                font-size: var(--font-size-md);
                                line-height: var(--line-height-100);
                                font-weight: var(--font-weight-regular);
                                color: var(--black-ultradark);
                        }


                        .active{
                                border: 1px solid var(--white-medium);
                                color: var(--white-ultradark);
                        }
                        
                        .module-container {
                            display: flex;
                            flex-direction: column;
                            gap: 16px;
                            flex-wrap: nowrap;
                        }
                        .module-card {
                            display: flex;
                            padding: 24px 16px;
                            flex-direction: column;
                            border-radius: 8px;
                            gap:16px;
                            border: 1px solid var(--white-medium);
                        }
                        .module-card h2 {
                            display: flex;
                            align-items: center;
                            gap: 6px;
                            margin: 0;
                            font-family: var(--font-primary);
                            font-size: var(--font-size-md);
                            line-height: var(--line-height-100);
                            font-weight: var(--font-weight-medium);
                            color: var(--black-dark);
                        }
                        .module-card p {
                            margin: 0;
                            margin-left: 24px;
                            display: none;
                            font-family: var(--font-primary);
                            font-size: var(--font-size-md);
                            line-height: var(--line-height-100);
                            font-weight: var(--font-weight-medium);
                            color: var(--white-dark);
                        }
                        .module-card:hover p {
                            display: flex;
                        }
                    `;
            this.shadowRoot.appendChild(style);
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
                    this.shadowRoot.querySelectorAll('*').forEach(el => {
                        el.style[property] = value;
                    });
                }
            });
        } catch (error) {
            console.error("setCustomStyles Error: ", error);
        }
    }
}

customElements.define('faq-list', FAQList);