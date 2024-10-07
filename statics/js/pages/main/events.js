class EventSection {
    constructor(data) {
        this.subHeading = data.eventSubHeading;
        this.heading = data.eventHeading;
        this.eventCards = data.eventCards;
        this.seeAll = data.seeAll; // See all URL
    }

    render() {
        const eventContainer = document.querySelector(".event-cards");
        eventContainer.innerHTML = this.eventCards.map(event => this.createEventCard(event)).join('');

        document.querySelector("#event-sub-heading").textContent = this.subHeading;
        document.querySelector("#event-heading").textContent = this.heading;

        // See all button
        const seeAllButton = document.createElement('custom-button');
        seeAllButton.setAttribute('type', 'url');
        seeAllButton.setAttribute('href', this.seeAll.url);
        seeAllButton.setAttribute('style-config', 'color:white');
        seeAllButton.classList.add('see-all-btn', 'inter-style-16-150-regular', 'white-solid');
        seeAllButton.textContent = this.seeAll.text;

        const eventInfo = document.querySelector('.event-card');
        eventInfo.appendChild(seeAllButton);
    }

    createEventCard(event) {
        return `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
                <div class="card-event-info">
                    <div class="card-header">
                        <div class="info-bar">
                            <p class="inter-style-14-100-regular white-ultramedium">${event.title}</p>
                        </div>
                    </div>
                    <div class="card-main">
                        <h1 class="h1-description inter-style-24-130-medium white-solid">${event.subtitle}</h1>
                        <p class="main-p-ellipsis inter-style-14-100-regular white-solid">${event.description}</p>
                    </div>
                    <div class="card-footer">
                        <div class="div-quest">
                            <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
                            <p class="inter-style-14-100-regular white-solid">${event.guests}</p>
                        </div>
                        <div class="pay-div">
                            <p class="inter-style-14-100-medium white-solid">${event.price}</p>
                            <p class="inter-style-14-100-regular white-solid">${event.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}