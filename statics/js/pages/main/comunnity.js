class CommunityManager {
  constructor(data) {
      this.data = data;
      this.init();
  }

  init() {
      this.populateHeader();
      this.populateCards();
      this.populateVideo();
      this.populateDescription();
  }

  // Başlık ve alt başlığı doldur
  populateHeader() {
      const { subHeading, name, nameInfo } = this.data;
      document.querySelector("#sub-Heading").textContent = subHeading;
      document.querySelector("#name").textContent = name;
      document.querySelector("#name-info").textContent = nameInfo;

      // See More butonu
      const seeMoreButton = document.querySelector(".comunnity-see-all-btn");
      seeMoreButton.setAttribute("href", this.data.seeMoreUrl);

      // Explore Us butonu
      const exploreUsButton = document.querySelector(".comunnity-explore-us");
      exploreUsButton.setAttribute("href", this.data.exploreUsUrl);
  }

  // Kartları doldur
  populateCards() {
      const cardContainer = document.querySelector(".comunnity-cards");

      this.data.communityCard.forEach((card) => {
          const { title, description, image } = card;
          const hasImage = image ? true : false;

          const cardBox = `
<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 m-10 community-card-padding">
<div class="comunnity-item">
  ${hasImage ? `<div class="vector-text-box"><img class="comunnity-vector" src="${image}" alt=""></div>` : ""}
  <p class="comunnity-item-name">${title}</p>
  <p class="comunnity-item-info">${description}</p>
</div>
</div>
`;
          cardContainer.innerHTML += cardBox;
      });
  }

  // Videoyu doldur
  populateVideo() {
      const video = document.querySelector("#video");
      video.setAttribute("src", this.data.video);
      video.load();
      video.play();
      document.querySelector("#video-content").textContent = this.data.videoContent;
  }

  // Açıklamayı doldur
  populateDescription() {
      document.querySelector("#comunnity-desc").textContent = this.data.communityDesc;
  }
}