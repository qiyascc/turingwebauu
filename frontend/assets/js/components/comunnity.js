const comunnityData = [
  {
    subHeading: "Turing Advantage",
    name: "Turing Academy",
    nameInfo: "offers a fun & accessible learning experience.",

    comunnityCard: [
      {
        card1: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
          "/frontend/assets/images/Vector (6).png",
        ],
      },
      {
        card2: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
        ],
      },
      {
        card3: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
        ],
      },
      {
        card4: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
        ],
      },
      {
        card5: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
          "/frontend/assets/images/Vector (5).png",
        ],
      },
      {
        card6: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
          "/frontend/assets/images/Vector (7).png",
        ],
      },
      {
        card7: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
          "/frontend/assets/images/Group 547.png",
        ],
      },
      {
        card8: [
          "Community first",
          "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
        ],
      },
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoContent: "COMUNNITY",
    comunnityDesc:
      "Learn highly demanded skills through practical courses, created bytrusted industry professionals, that focus on real-world applications.",
  },
];

function getComunnityData(data) {
  const subHeading = document.querySelector("#sub-Heading");
  subHeading.textContent = data.subHeading;

  const name = document.querySelector("#name");
  name.textContent = data.name;

  const nameInfo = document.querySelector("#name-info");
  nameInfo.textContent = data.nameInfo;

  data.comunnityCard.forEach((item, index) => {
    const cardContainer = document.querySelector(".comunnity-cards");
    const cardKey = Object.keys(item)[0];

    const cardData = item[cardKey];
    console.log(cardData);
    const hasImage = cardData[2] ? true : false;

    const cardBox = `
       <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 m-10 community-card-padding">
         <div class="comunnity-item">
           ${
             hasImage
               ? `<div class="vector-text-box">
                           <img class="comunnity-vector" src="${cardData[2]}" alt="">
                         </div>`
               : ""
           }
           <p class="comunnity-item-name">${cardData[0]}</p>
           <p class="comunnity-item-info">${cardData[1]}</p>
         </div>
       </div>
     `;
    cardContainer.innerHTML += cardBox;
  });
  const video = document.querySelector("#video");
  console.log("video", data.video);
  // console.log("get", video.getAttribute("src"));

  video.setAttribute("src", data.video);
  // video.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
  console.log(data.video);

  video.load();

  video.play();
  const videoContent = document.querySelector("#video-content");
  videoContent.textContent = data.videoContent;

  const comunnityDesc = document.querySelector("#comunnity-desc");
  comunnityDesc.textContent = data.comunnityDesc;
}

getComunnityData(comunnityData[0]);
