// const skillup = document.createElement('div');

// skillup.className = "container";

// skillup.innerHTML = `
//                 <div class="row">
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
//                         <div class="skillup-area">
//                             <div class="skillup-header">
//                                 <p class="inter-style-14-100-medium-up white-ultradark">
//                                     Mutual Choice
//                                 </p>
//                             </div>
//                             <div class="skillup-main">
//                                 <h1 class="plusjakarta-style-48-125-semibold">
//                                     Skill up, stand out
//                                 </h1>
//                                 <div class="vector">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="168" height="57" viewBox="0 0 168 57" fill="none">
//                                         <path fill-rule="evenodd" clip-rule="evenodd" d="M143.718 0.395082C125.681 4.24821 131.229 7.84255 141.182 5.19712C157.602 0.826406 167.398 7.58376 162.579 20.0058C159.156 28.8047 142.704 39.2427 125.808 43.3259C108.183 47.5816 77.4036 47.8691 56.7041 43.7859C54.707 43.3834 36.163 40.2203 32.9297 39.6165C19.3941 37.0573 12.0399 36.7123 6.77781 38.4951C-0.322795 40.9105 -2.38325 50.572 3.19581 55.2878C5.66834 57.3869 6.23893 57.0419 4.71737 54.4252C-1.52736 43.6709 11.9765 38.035 33.2467 42.5207C43.9927 44.7924 52.2662 45.8563 58.0354 47.064C109.768 57.9045 168.127 41.6006 168 16.1814C167.968 6.6061 154.781 -1.9628 143.718 0.395082Z" fill="#FF4C00"/>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div class="skillup-footer">
//                                 <button class="see-all-btn inter-style-16-150-regular black-light">
//                                     <a href="#">
//                                         See all
//                                     </a>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-10px">
//                         <div class="service-card">
//                             <div class="service-card-header">
//                                 <span class="logo-span">
//                                     <img src="../assets/images/Frame.png" alt="logo">
//                                 </span>
//                             </div>
//                             <div class="service-card-info">
//                                 <h1 class="inter-style-20-100-medium black-ultradark">Design</h1>
//                                 <p class="inter-style-14-150-regular black-ultralight">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet</p>
//                             </div>
//                             <div class="service-card-action">
//                                 <button class="learn-more-btn inter-style-14-100-semibold blue-lightmedium">
//                                     Learn more
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
//                                         <path d="M9.57129 1.71436L1.47555 10.0601" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                                         <path d="M0.999861 1.71411L9.57129 1.71411L9.57129 10.2855" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-10px">
//                         <div class="service-card">
//                             <div class="service-card-header">
//                                 <span class="logo-span">
//                                     <img src="../assets/images/Frame.png" alt="logo">
//                                 </span>
//                             </div>
//                             <div class="service-card-info">
//                                 <h1 class="inter-style-20-100-medium black-ultradark">Design</h1>
//                                 <p class="inter-style-14-150-regular black-ultralight">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet</p>
//                             </div>
//                             <div class="service-card-action">
//                                 <button class="learn-more-btn inter-style-14-100-semibold blue-lightmedium">
//                                     Learn more
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
//                                         <path d="M9.57129 1.71436L1.47555 10.0601" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                                         <path d="M0.999861 1.71411L9.57129 1.71411L9.57129 10.2855" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
// `;

// let skillupArea = document.getElementById('skillup');

// skillupArea.appendChild(skillup);


const skillUpData = [
    {

        subHeading: "Mutual Choice",
        heading: "Skill up, stand out",
        skillUpCard: [
            {
                cardIcon: "../assets/images/Frame.png",
                cardHeader: 'Design',
                description: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet'
            }
        ],
        skillUpCard2: [
            {
                cardIcon: "../assets/images/Frame.png",
                cardHeader: 'Design',
                description: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet'
            }
        ]

    },
]






function getSkillUpData(data) {
    const subHeading = document.querySelector("#sub-heading");
    subHeading.textContent = data.subHeading;

    const heading = document.querySelector("#heading");
    heading.textContent = data.heading;

    const cardIcon = document.querySelector("#cardIcon")
    cardIcon.src = data.skillUpCard[0].cardIcon

    const cardHeader = document.querySelector("#cardHeader");
    cardHeader.textContent = data.skillUpCard[0].cardHeader;

    const description = document.querySelector("#description")
    description.textContent = data.skillUpCard[0].description;

    //! ----------
    const cardicon = document.querySelector("#card-icon")
    cardicon.src = data.skillUpCard2[0].cardIcon

    const cardHeading = document.querySelector("#card-heading");
    cardHeading.textContent = data.skillUpCard2[0].cardHeader;

    const cardDescription = document.querySelector("#card-description")
    cardDescription.textContent = data.skillUpCard2[0].description
}


getSkillUpData(skillUpData[0])