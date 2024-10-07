class Card {
    constructor(mediaType, src, label, title, description, icon, mediaStyle, styleConfig) {
        this.mediaType = mediaType;
        this.src = src;
        this.label = label;
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.mediaStyle = mediaStyle;
        this.styleConfig = styleConfig;
    }

    createCardElement() {
        const cardComponent = document.createElement('card-component');

        cardComponent.setAttribute('media-type', this.mediaType);
        cardComponent.setAttribute('src', this.src);
        cardComponent.setAttribute('label', this.label);
        cardComponent.setAttribute('title', this.title);
        cardComponent.setAttribute('description', this.description);
        cardComponent.setAttribute('icon', this.icon);
        cardComponent.setAttribute('media-style', this.mediaStyle);
        cardComponent.setAttribute('style-config', this.styleConfig);

        return cardComponent;
    }
}

export default Card;
