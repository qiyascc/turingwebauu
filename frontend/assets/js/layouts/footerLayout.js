const footerData = [
  {
    logo: "../assets/images/Logo.png",
    description:
      "Learn highly demanded skills through practical courses, created by trusted industry professionals.",
    social: [
      {
        instagram: [
          "/frontend/assets/images/Instagram (1).png",
          "https://linkedin.com",
        ],
      },
      {
        facebook: [
          "/frontend/assets/images/facebook (1).png",
          "https://linkedin.com",
        ],
      },
      {
        linkedin: [
          "/frontend/assets/images/Linkedin (1).png",
          "https://linkedin.com",
        ],
      },
      {
        tiktok: [
          "/frontend/assets/images/Tiktok.png",
          "https://linkedin.com",
        ],
      },
      {
        whatsapp: [
          "/frontend/assets/images/Whatsapp.png",
          "https://twitter.com",
        ],
      },
      {
        youtube: [
          "/frontend/assets/images/Youtube.png",
          "https://facebook.com",
        ],
      },
    ],
    sitemaps: [
      {
        type: "n-underline",
        title: "Academy",
        content: [
          { title: "About us", url: "#" },
          { title: "Community", url: "#" },
          { title: "Instructors", url: "#" },
          { title: "Graduates", url: "#" },
          { title: "Partners", url: "#" },
        ],
        order: 2,
      },
      {
        type: "y-underline",
        title: "Upcoming Events",
        content: [
          { title: "lII Design Competition", url: "#" },
          { title: "II Hackhaton", url: "#" },
          { title: "lV Design Competition", url: "#" },
        ],
        order: 1,
      },
      {
        type: "n-underline",
        title: "Events",
        content: [
          { title: "Seminar", url: "#" },
          { title: "Workshop", url: "#" },
          { title: "Hackhaton", url: "#" },
          { title: "Gallery", url: "#" },
        ],
        order: 3,
      },
      {
        type: "n-underline",
        title: "Fields of Study",
        content: [
          { title: "UX/UI Design", url: "#" },
          { title: "Back-end Development", url: "#" },
          { title: "Front-end Development", url: "#" },
          { title: "Computer Science", url: "#" },
          { title: "Scholarship", url: "#" },
        ],
        order: 4,
      },
    ],
  },
];

function generateFooter(data) {
  const footer = document.querySelector("footer");

  
  const footerContainer = document.createElement("div");
  footerContainer.className =
    "mx-auto container py-6 lg:py-8 grid grid-cols-6 sm:grid-cols-2 gap-10 md:grid-cols-6 ";
  footer.appendChild(footerContainer);

  // Logo and Description Section
  const logoSection = document.createElement("div");
  logoSection.className = "space-y-8 col-span-4 md:col-span-2";
  footerContainer.appendChild(logoSection);

  const logoDiv = document.createElement("div");
  const logoImg = document.createElement("img");
  logoImg.src = data.logo;
  logoImg.alt = "Company Logo";
  logoDiv.appendChild(logoImg);
  logoSection.appendChild(logoDiv);

  const description = document.createElement("p");
  description.className = "text-white logo-text w-80";
  description.textContent = data.description;
  logoSection.appendChild(description);

  // Social Links Section
  const socialContainer = document.createElement("div");
  socialContainer.className =
    "md:space-y-2 space-x-2 md:space-x-0  md:w-44";
  logoSection.appendChild(socialContainer);

  const socialListContainer = document.createElement("div");
  socialListContainer.className = "flex flex-wrap h-28  ";

  data.social.forEach((socialItem) => {
    const [platform, details] = Object.entries(socialItem)[0];
    const [icon, url] = details;

    const socialLink = document.createElement("a");
    socialLink.href = url;

    const socialIcon = document.createElement("img");
    socialIcon.src = icon;
    socialIcon.alt = `${platform} Icon`;
    socialIcon.className = "w-5 h-5  ";
    socialLink.appendChild(socialIcon);
    socialLink.className='w-10 h-10 border-2   flex justify-center items-center rounded-full border-gray-400  border-solid'
    const socialListItem = document.createElement("div");
    socialListItem.className = "md:w-1/3 w-3/3 flex flex-wrap ";
    socialListItem.appendChild(socialLink);

    socialListContainer.appendChild(socialListItem);
    
  });

  socialContainer.appendChild(socialListContainer);

  // Sitemaps - Sort by 'order'
  const sortedSitemaps = data.sitemaps.sort((a, b) => a.order - b.order);

  sortedSitemaps.forEach((item) => {
    if (item.type !== "y-underline" && item.type !== "n-underline") {
      console.error(`Invalid type "${item.type}" found in sitemaps.`);
      return;
    }

    const sitemapSection = document.createElement("div");
    sitemapSection.className = "col-span-4 md:col-span-1";
    footerContainer.appendChild(sitemapSection);

    const sitemapTitle = document.createElement("h2");
    sitemapTitle.className =
      "mb-6 text-sm font-semibold text-white uppercase dark:text-white";
    sitemapTitle.textContent = item.title;
    sitemapSection.appendChild(sitemapTitle);

    const sitemapList = document.createElement("ul");
    sitemapList.className = "text-gray-500 dark:text-gray-400 font-medium";
    item.content.forEach((linkItem) => {
      const sitemapLink = document.createElement("a");
      sitemapLink.href = linkItem.url;
      sitemapLink.textContent = linkItem.title;

      if (item.type === "n-underline") {
        sitemapLink.className = "no-underline";
      } else {
        sitemapLink.className = "underline";
      }

      const sitemapListItem = document.createElement("li");
      sitemapListItem.className = "mb-4";
      sitemapListItem.appendChild(sitemapLink);
      sitemapList.appendChild(sitemapListItem);
    });

    sitemapSection.appendChild(sitemapList);
  });

  // Footer Bottom Section
  const footerBottom = document.createElement("div");
  footerBottom.className = "mx-auto container flex flex-col justify-between relative";
  footer.appendChild(footerBottom);

  const rightsBox = document.createElement("div");
  rightsBox.className =
    "px-8 py-6 text-white dark:bg-gray-700 md:flex md:items-center md:justify-between rights-box";
  footerBottom.appendChild(rightsBox);

  const biraddim=document.createElement("div");
  biraddim.className='absolute bottom-0 left-0 right-0'
  const footerImg=document.createElement("img");
  footerImg.src='/frontend/assets/images/Union (1).png';
  
  biraddim.appendChild(footerImg);
  biraddim.className='ml-8 opacity-25 ';
  footer.appendChild(biraddim);


  const copyright = document.createElement("span");
  copyright.className = "text-sm dark:text-gray-300 sm:text-center";
  copyright.textContent = "© 2023. All Rights Reserved.";
  rightsBox.appendChild(copyright);

  const creator = document.createElement("span");
  creator.innerHTML =
    'Created by <a href="#" class="underline">SHI Studio.</a>';
  rightsBox.appendChild(creator);

  const footerBlurBox = document.createElement("div");
  footerBlurBox.className = "footer-blur-box container";
  footer.appendChild(footerBlurBox);

  const footerBlurImg = document.createElement("img");
  footerBlurImg.className = "footer-blur";
  footerBlurImg.src = "/frontend/assets/images/Blur (3).png";
  footerBlurBox.appendChild(footerBlurImg);
}



generateFooter(footerData[0]);
