class Career {
    constructor(data) {
        this.data = data;
        // Update the ID reference here
        this.cardContainer = document.getElementById('career-card-container');
        this.subheadingElement = document.getElementById('career-subheading');
        this.mainHeadingElement = document.getElementById('career-main-heading');
        this.seeAllLinkElement = document.getElementById('see-all-link');

        this.init();
    }

    init() {
        this.renderHeader();
        this.addCards(this.data.cards);
    }

    renderHeader() {
        this.subheadingElement.textContent = this.data.subheading;
        this.mainHeadingElement.innerHTML = `${this.data.mainHeading}<span class="turing-career"> Turing Academy</span>`;
        this.seeAllLinkElement.textContent = this.data.seeAllText;
    }

    createCard(card) {
        const cardComponent = document.createElement('card-component');
        cardComponent.setAttribute('media-type', card.mediaType);
        cardComponent.setAttribute('src', card.src);
        cardComponent.setAttribute('label', card.label);
        cardComponent.setAttribute('title', card.title);
        cardComponent.setAttribute('description', card.description);
        cardComponent.setAttribute('icon', card.icon);
        cardComponent.setAttribute('media-style', card.mediaStyle);
        cardComponent.setAttribute('style-config', card.styleConfig);

        return cardComponent;
    }

    addCards(cards) {
        cards.forEach(card => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-right-24px slide-card-rs';
            const cardElement = this.createCard(card);
            colDiv.appendChild(cardElement);
            this.cardContainer.appendChild(colDiv);
        });
    }
}