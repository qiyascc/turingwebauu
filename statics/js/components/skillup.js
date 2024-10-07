class SkillUpManager {
    constructor(data) {
        this.data = data;
        this.init();
    }

    init() {
        this.createSection();
        this.createCards();
    }

    // Ana bölümü oluşturur
    createSection() {
        const section = document.createElement('div');
        section.classList.add('skillup-area');

        const header = document.createElement('div');
        header.classList.add('skillup-header');
        const subHeading = document.createElement('p');
        subHeading.classList.add('inter-style-14-100-medium-up', 'white-ultradark');
        subHeading.textContent = this.data.subHeading;
        header.appendChild(subHeading);

        const main = document.createElement('div');
        main.classList.add('skillup-main');
        const heading = document.createElement('h1');
        heading.classList.add('plusjakarta-style-48-125-semibold');
        heading.textContent = this.data.heading;
        main.appendChild(heading);

        section.appendChild(header);
        section.appendChild(main);

        const container = document.getElementById('card-container'); // Kartların ekleneceği alan
        container.appendChild(section);
    }

    // Kartları dinamik olarak oluşturur
    createCards() {
        const container = document.getElementById('card-container');

        this.data.skillUpCard.forEach((card) => {
            const cardHtml = document.createElement('div');
            cardHtml.classList.add('col-xl-4', 'col-lg-4', 'col-md-6', 'col-sm-12', 'col-xs-12', 'p-10px');
            cardHtml.innerHTML = `
        <div class="service-card">
            <div class="service-card-header">
                <span class="logo-span">
                    <img src="${card.cardIcon}" alt="logo">
                </span>
            </div>
            <div class="service-card-info">
                <h1 class="inter-style-20-100-medium black-ultradark">${card.cardHeader}</h1>
                <p class="inter-style-14-150-regular black-ultralight">${card.description}</p>
            </div>
            <div class="service-card-action">
                <custom-button type="url" href="${card.url}" icon="🌟" position="right" style-config="color: #344054"
                    class="learn-more-btn inter-style-14-100-semibold blue-lightmedium">Learn more</custom-button>
            </div>
        </div>
    `;

            container.appendChild(cardHtml);
        });
    }
}
