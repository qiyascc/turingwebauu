// const eventpage = document.createElement('div');

// const shadow1 = document.createElement('div');

// const shadow2 = document.createElement('div');

// eventpage.className = "container";

// shadow1.className = 'shadow-circle-ui';

// shadow2.className = 'shadow-circle-ui-2';


// eventpage.innerHTML = `
//                 <div class="row event-header-row">
//                     <div class="event-info col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                         <div class="event-card">
//                             <div class="card-header-name">
//                                 <p class="inter-style-14-100-medium-up white-dark">events</p>
//                                 <h1 class="plusjakarta-style-48-120-medium white-solid">Upcoming Events</h1>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="56" height="91" viewBox="0 0 56 91" fill="none">
//                                     <path d="M24.1953 31.9701C28.1445 27.8315 31.2723 22.492 33.326 16.426C34.9057 11.7501 37.1804 3.12494 37.1804 1.76639C37.1804 -0.350392 40.9717 -1.2034 40.9717 2.90381C40.9717 5.02061 42.3618 17.3106 46.5954 24.672C50.6078 31.6858 52.1559 33.487 54.9678 34.6875C56.5791 35.351 56.3264 35.8562 54.0516 36.646C48.4279 38.6049 45.9003 43.3124 40.8137 61.2577C37.8439 71.6838 36.0114 71.3678 34.4633 60.152C32.9468 48.9993 27.3231 36.3301 23.3107 34.94C21.9837 34.4977 22.0785 34.2133 24.1953 31.9701ZM37.4648 52.1271L38.0651 54.9705C38.3178 54.3071 41.6036 40.3741 47.3852 36.646C48.9649 35.635 49.2493 35.2243 48.3331 35.2243C45.3948 35.2243 40.8137 27.4207 39.4236 19.9013C38.7601 16.4576 38.6653 16.3312 37.8439 18.4796C36.1378 23.0607 33.326 27.389 29.4715 31.4014L26.944 34.0557C27.2915 34.4664 34.4002 37.2463 37.4648 52.1271Z" fill="#FFBD13" fill-opacity="0.8"/>
//                                     <path d="M1.41566 69.1878C6.37591 65.1438 10.0092 57.9723 10.0092 52.0642C10.0092 49.4735 13.453 46.5034 14.7483 53.8648C16.328 62.9954 17.3706 65.4913 20.9407 69.0615C23.879 71.9681 23.9106 71.7785 20.2141 72.7895C16.7703 73.7374 14.2112 78.2872 12.5367 86.47C11.4941 91.5567 7.73445 91.7775 7.57648 86.5961C7.35532 79.2979 5.68084 75.2223 1.88957 72.8211C-0.511576 71.273 -0.574764 70.7991 1.41566 69.1878ZM5.20693 70.8626C6.31272 71.2418 9.31415 73.8637 10.0092 75.0011C10.957 76.6124 10.9254 76.6124 12.0312 74.8432C12.979 73.3266 15.2222 71.6522 16.7071 71.3678C17.8445 71.1151 17.8129 71.0522 15.9805 69.2513C15.0958 68.3983 13.8637 66.6603 13.2318 65.3966C11.8101 62.6479 11.9996 62.6798 10.6411 64.8598C9.59849 66.5027 7.89242 68.3032 5.74403 70.0093C5.14374 70.42 4.95418 70.7678 5.20693 70.8626Z" fill="#FFBD13" fill-opacity="0.8"/>
//                                 </svg>
//                             </div>
//                             <button class="see-all-btn inter-style-16-150-regular white-solid">
//                                 <a href="#">See all</a>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class ="row event-main-row">
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
//                         <div class="card-event-info">
//                             <div class="card-header">
//                                 <div class="info-bar">
//                                     <p class="inter-style-14-100-regular white-ultramedium">UX/UI Dizayn</p>
//                                 </div>
//                             </div>
//                             <div class="card-main">
//                                 <h1 class="h1-description inter-style-24-130-medium white-solid">III Design Competition</h1>
//                                 <p class="main-p-ellipsis inter-style-14-100-regula white-solid">A lot happened this month. Take a look at what's coming..</p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="div-quest">
//                                     <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
//                                     <p class="inter-style-14-100-regular white-solid">Togrul Samed, Zumrad Murado.</p>
//                                 </div>
//                                 <div class="pay-div">
//                                     <p class="inter-style-14-100-medium white-solid">Ödənişsiz</p>
//                                     <p class="inter-style-14-100-regular white-solid">Apr 17, 2024</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
//                         <div class="card-event-info">
//                             <div class="card-header">
//                                 <div class="info-bar">
//                                     <p class="inter-style-14-100-regular white-ultramedium">UX/UI Dizayn</p>
//                                 </div>
//                             </div>
//                             <div class="card-main">
//                                 <h1 class="h1-description inter-style-24-130-medium white-solid">III Design Competition</h1>
//                                 <p class="main-p-ellipsis inter-style-14-100-regula white-solid">A lot happened this month. Take a look at what's coming..</p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="div-quest">
//                                     <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
//                                     <p class="inter-style-14-100-regular white-solid">Togrul Samed, Zumrad Murado.</p>
//                                 </div>
//                                 <div class="pay-div">
//                                     <p class="inter-style-14-100-medium white-solid">Ödənişsiz</p>
//                                     <p class="inter-style-14-100-regular white-solid">Apr 17, 2024</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
//                         <div class="card-event-info">
//                             <div class="card-header">
//                                 <div class="info-bar">
//                                     <p class="inter-style-14-100-regular white-ultramedium">UX/UI Dizayn</p>
//                                 </div>
//                             </div>
//                             <div class="card-main">
//                                 <h1 class="h1-description inter-style-24-130-medium white-solid">III Design Competition</h1>
//                                 <p class="main-p-ellipsis inter-style-14-100-regula white-solid">A lot happened this month. Take a look at what's coming..</p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="div-quest">
//                                     <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
//                                     <p class="inter-style-14-100-regular white-solid">Togrul Samed, Zumrad Murado.</p>
//                                 </div>
//                                 <div class="pay-div">
//                                     <p class="inter-style-14-100-medium white-solid">Ödənişsiz</p>
//                                     <p class="inter-style-14-100-regular white-solid">Apr 17, 2024</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
//                         <div class="card-event-info">
//                             <div class="card-header">
//                                 <div class="info-bar">
//                                     <p class="inter-style-14-100-regular white-ultramedium">UX/UI Dizayn</p>
//                                 </div>
//                             </div>
//                             <div class="card-main">
//                                 <h1 class="h1-description inter-style-24-130-medium white-solid">III Design Competition</h1>
//                                 <p class="main-p-ellipsis inter-style-14-100-regula white-solid">A lot happened this month. Take a look at what's coming..</p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="div-quest">
//                                     <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
//                                     <p class="inter-style-14-100-regular white-solid">Togrul Samed, Zumrad Murado.</p>
//                                 </div>
//                                 <div class="pay-div">
//                                     <p class="inter-style-14-100-medium white-solid">Ödənişsiz</p>
//                                     <p class="inter-style-14-100-regular white-solid">Apr 17, 2024</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
//                         <div class="card-event-info">
//                             <div class="card-header">
//                                 <div class="info-bar">
//                                     <p class="inter-style-14-100-regular white-ultramedium">UX/UI Dizayn</p>
//                                 </div>
//                             </div>
//                             <div class="card-main">
//                                 <h1 class="h1-description inter-style-24-130-medium white-solid">III Design Competition</h1>
//                                 <p class="main-p-ellipsis inter-style-14-100-regula white-solid">A lot happened this month. Take a look at what's coming..</p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="div-quest">
//                                     <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
//                                     <p class="inter-style-14-100-regular white-solid">Togrul Samed, Zumrad Murado.</p>
//                                 </div>
//                                 <div class="pay-div">
//                                     <p class="inter-style-14-100-medium white-solid">Ödənişsiz</p>
//                                     <p class="inter-style-14-100-regular white-solid">Apr 17, 2024</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
//                         <div class="card-event-info">
//                             <div class="card-header">
//                                 <div class="info-bar">
//                                     <p class="inter-style-14-100-regular white-ultramedium">UX/UI Dizayn</p>
//                                 </div>
//                             </div>
//                             <div class="card-main">
//                                 <h1 class="h1-description inter-style-24-130-medium white-solid">III Design Competition</h1>
//                                 <p class="main-p-ellipsis inter-style-14-100-regula white-solid">A lot happened this month. Take a look at what's coming..</p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="div-quest">
//                                     <p class="inter-style-14-100-medium white-solid">Qonaqlar:</p>
//                                     <p class="inter-style-14-100-regular white-solid">Togrul Samed, Zumrad Murado.</p>
//                                 </div>
//                                 <div class="pay-div">
//                                     <p class="inter-style-14-100-medium white-solid">Ödənişsiz</p>
//                                     <p class="inter-style-14-100-regular white-solid">Apr 17, 2024</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
// `;

// shadow1.innerHTML = `<img src="../assets/images/Blur (1).png">`;

// shadow2.innerHTML = `<img src="../assets/images/Blur (2).png">`;

// let eventpageArea = document.getElementById('events');

// let shadow1Area = document.getElementById('events');

// let shadow2Area = document.getElementById('events');

// eventpageArea.appendChild(eventpage);

// shadow1Area.appendChild(shadow1);

// shadow2Area.appendChild(shadow2);




const eventData=[
{
    eventSubHeading:"events",
    eventHeading:"Upcoming Events",

    eventCards:[
        {
            card1:[
                "UX/UI Dizayn",
                "III Design Competition",
                "A lot happened this month. Take a look at what's coming..",
                "Qonaqlar:",
                "Togrul Samed, Zumrad Murado.",
                "Ödənişsiz",
                "Apr 17, 2024"
            ]
        },
        {
            card2:[
                "UX/UI Dizayn",
                "III Design Competition",
                "A lot happened this month. Take a look at what's coming..",
                "Qonaqlar:",
                "Togrul Samed, Zumrad Murado.",
                "Ödənişsiz",
                "Apr 17, 2024"
            ]
        },
        {
            card3:[
                "UX/UI Dizayn",
                "III Design Competition",
                "A lot happened this month. Take a look at what's coming..",
                "Qonaqlar:",
                "Togrul Samed, Zumrad Murado.",
                "Ödənişsiz",
                "Apr 17, 2024"
            ]
        },
        {
            card4:[
                "UX/UI Dizayn",
                "III Design Competition",
                "A lot happened this month. Take a look at what's coming..",
                "Qonaqlar:",
                "Togrul Samed, Zumrad Murado.",
                "Ödənişsiz",
                "Apr 17, 2024"
            ]
        },
        {
            card5:[
                "UX/UI Dizayn",
                "III Design Competition",
                "A lot happened this month. Take a look at what's coming..",
                "Qonaqlar:",
                "Togrul Samed, Zumrad Murado.",
                "Ödənişsiz",
                "Oct 21, 2024"
            ]
        },
        {
            card6:[
                "Front End ",
                "III Front end Competition",
                "A lot happened this month. Take a look at what's coming..",
                "Qonaqlar:",
                "Togrul Samed, Zumrad Muradov.",
                "Ödənişsiz",
                "Apr 24, 2024"
            ]
        },
    ]
}
]



function getEvenData(data) {
    const eventSubHeading=document.querySelector("#event-sub-heading")
    eventSubHeading.textContent=data.eventSubHeading;

    const eventHeading=document.querySelector("#event-heading")
    eventHeading.textContent=data.eventHeading

    data.eventCards.forEach(item=>{
        const eventContainer=document.querySelector(".event-cards")
        const cardKey=Object.keys(item)[0]
       
        const cardData=item[cardKey]
        console.log(cardData);

        const eventCardBox=`
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 event-card-size">
                    <div class="card-event-info">
                        <div class="card-header">
                            <div class="info-bar">
                                <p class="inter-style-14-100-regular white-ultramedium">${cardData[0]}</p>
                            </div>
                        </div>
                        <div class="card-main">
                            <h1 class="h1-description inter-style-24-130-medium white-solid">${cardData[1]}</h1>
                            <p class="main-p-ellipsis inter-style-14-100-regula white-solid">${cardData[2]}</p>
                        </div>
                        <div class="card-footer">
                            <div class="div-quest">
                                <p class="inter-style-14-100-medium white-solid">${cardData[3]}</p>
                                <p class="inter-style-14-100-regular white-solid">${cardData[4]}</p>
                            </div>
                            <div class="pay-div">
                                <p class="inter-style-14-100-medium white-solid">${cardData[5]}</p>
                                <p class="inter-style-14-100-regular white-solid">${cardData[6]}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `

        eventContainer.innerHTML+=eventCardBox
    })

}


getEvenData(eventData[0])