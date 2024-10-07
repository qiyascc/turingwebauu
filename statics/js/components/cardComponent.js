class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        try {
            this.createCard();
            this.applyStyles();
        } catch (error) {
            console.error("Constructor Error: ", error);
        }
    }

    createCard() {
        try {
            const wrapper = document.createElement('div');
            wrapper.classList.add('card-wrapper');
            this.shadowRoot.appendChild(wrapper);

            this.createMediaElement(wrapper);
            this.createContentElement(wrapper);
        } catch (error) {
            console.error("createCard Error: ", error);
        }
    }

    createMediaElement(wrapper) {
        try {
            const mediaType = this.getAttribute('media-type');
            const src = this.getAttribute('src');
            let mediaElement;
    
            if (mediaType === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.src = src;
                mediaElement.controls = false;
                mediaElement.muted = true; // Başlangıçta sesi kapalı
                mediaElement.classList.add('media');
    
                // Media style tətbiq et
                this.applyMediaStyles(mediaElement);
    
                // Play button overlay
                const playButton = document.createElement('img');
                playButton.src = '../statics/img/core/icons/play.png'
                playButton.classList.add('play-button');
    
                // Ses açma/kapama butonu
                const voiceButton = document.createElement('img');
                voiceButton.src = "../statics/img/core/icons/voice-mute.png"; // Başlangıçta ses kapalı simgesi
                voiceButton.classList.add('voice-button');
                voiceButton.style.position = 'absolute';
                voiceButton.style.left = '80%';
                voiceButton.style.width = '32px';
                voiceButton.style.height = '32px';
                voiceButton.style.top = '65%';
    
                // Ses butonuna tıklama olay dinleyicisi
                voiceButton.addEventListener('click', () => {
                    mediaElement.muted = !mediaElement.muted; // Ses durumu değiştir
                    voiceButton.src = mediaElement.muted ? "../statics/img/core/icons/voice-mute.png" : "../statics/img/core/icons/voice-play.png"; // İkon değişimi
                });
    
                playButton.addEventListener('click', () => {
                    if (mediaElement.paused) {
                        mediaElement.play();
                        playButton.src = "../statics/img/core/icons/pause.png"; 
                        mediaElement.loop = true;
    
                        setTimeout(() => {
                            playButton.style.display = 'none';
                        }, 3000);
                    } else {
                        mediaElement.pause();
                        playButton.src = this.getAttribute('icon'); 
                    }
                });
                mediaElement.addEventListener('click', () => {
                    playButton.style.display = 'block';
                });
    
                wrapper.appendChild(mediaElement);
                wrapper.appendChild(playButton);
                wrapper.appendChild(voiceButton); // Ses butonunu ekle
            } else {
                mediaElement = document.createElement('img');
                mediaElement.src = src;
                mediaElement.alt = 'Image';
                mediaElement.classList.add('media');
                wrapper.appendChild(mediaElement);
            }
        } catch (error) {
            console.error("createMediaElement Error: ", error);
        }
    }
    
    


    createContentElement(wrapper) {
        try {
            const content = document.createElement('div');
            content.classList.add('card-content');

            this.createTextContent(content);
            this.createSocialLinks(content);

            wrapper.appendChild(content);
        } catch (error) {
            console.error("createContentElement Error: ", error);
        }
    }

    createTextContent(content) {
        try {
            const textContent = document.createElement('div');
            textContent.classList.add('text-content');

            const label = this.getAttribute('label');
            if (label) {
                const labelElement = document.createElement('p');
                labelElement.classList.add('qualification');
                labelElement.textContent = label;
                textContent.appendChild(labelElement);
            }

            const title = document.createElement('p');
            title.classList.add('graduete-name');
            title.textContent = this.getAttribute('title');

            const description = document.createElement('p');
            description.classList.add('description');
            description.textContent = this.getAttribute('description');

            textContent.appendChild(title);
            textContent.appendChild(description);
            content.appendChild(textContent);
        } catch (error) {
            console.error("createTextContent Error: ", error);
        }
    }

    createSocialLinks(content) {
        try {
            const socialLinks = document.createElement('div');
            socialLinks.classList.add('social-links');

            const linkedinUrl = this.getAttribute('linkedin-url');
            const behanceUrl = this.getAttribute('behance-url');

            if (behanceUrl) {
                this.addSocialLink(socialLinks, behanceUrl, 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/behance-icon.png', 'Behance');
            }
            if (linkedinUrl) {
                this.addSocialLink(socialLinks, linkedinUrl, 'https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png', 'LinkedIn');
            }


            content.appendChild(socialLinks);
        } catch (error) {
            console.error("createSocialLinks Error: ", error);
        }
    }   

    addSocialLink(container, url, iconUrl, altText) {
        try {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            const icon = document.createElement('img');
            icon.src = iconUrl;
            icon.alt = altText;
            icon.classList.add('social-icon');

            link.appendChild(icon);
            container.appendChild(link);
        } catch (error) {
            console.error("addSocialLink Error: ", error);
        }
    }
    applyMediaStyles(mediaElement) {
        try {
            const mediaStyle = this.getAttribute('media-style');
            if (mediaStyle) {
                const styleObj = JSON.parse(mediaStyle);
                for (const [key, value] of Object.entries(styleObj)) {
                    mediaElement.style[key] = value;
                }
            }
        } catch (error) {
            console.error("applyMediaStyles Error: ", error);
        }
    }
    
    applyStyles() {
        try {
            const styleConfig = this.getAttribute('style-config');
            if (styleConfig) {
                this.setCustomStyles(styleConfig);
            }

            // General styles for the component
            const styles = `
                .card-wrapper {
                 display: flex;
            flex-direction: column;
            padding: 16px;
            border-radius: 16px;
            gap: 20px;
            border: 1px solid var(--white-medium);
            background: var(--white-solid);
            margin:0 24px 24px 0;
           position:relative;
           height: 100%;    
                }
                .media {
                    width: 100%;
                    height: 75%;
                  
                    object-fit: cover;
                    border-radius: 10px;
                }
                .play-button {
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 40px;
                    color: white;
                  
                    padding: 10px;
                    cursor: pointer;
                    width:64px;
                    height:64px;

                }
      
     
                .card-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                   
                }
                .text-content {
                    display: flex;
                    flex-direction: column;
                   
                }
                .graduete-name, .description {
                    margin: 0;
                }
                .qualification {
                    padding: 6px 10px;
                    border-radius: 8px;
                    background: var(--white-ultralight, #F0F0F5);
                    margin-bottom: 10px;
                    width: fit-content;
                }
                .graduete-name {
                  font-family: var(--font-primary);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-125);
    font-weight: var(--font-weight-medium);
                    margin-bottom:6px;
                }
                .description {
                       font-family: var(--font-primary);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-150);
    font-weight: var(--font-weight-regular);
                }
                .social-links {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .social-links a {
                     display: flex;
            text-decoration: none;
            align-items: center;
            justify-content: center;
            flex-wrap: nowrap;
            width: 32px;
            height: 32px;
            border-radius: 100px;
            border: 1px solid var(--white-medium);  
                }
                .social-icon {
                    width: 16px;
                    height: 16px;
                    
                }
            `;
            const styleElement = document.createElement('style');
            styleElement.textContent = styles;
            this.shadowRoot.appendChild(styleElement);
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
                    this.shadowRoot.querySelector('.card-wrapper').style[property] = value;
                }
            });
        } catch (error) {
            console.error("setCustomStyles Error: ", error);
        }
    }
}

customElements.define('card-component', CardComponent);

    
