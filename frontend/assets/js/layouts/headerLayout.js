// Verilen data objesi
const data = [
    {
        logo: ["../assets/images/turing-logo-color.png", "Turing Logo", 1],
        nav: [
            { type: "normal", url: ["Academy", "#"], order: 1 },
            {
                type: "dropdown",
                urls: [
                    { name: "Fields of Study 1", url: "#" },
                    { name: "Fields of Study 2", url: "#" },
                    { name: "Fields of Study 3", url: "#" }
                ],
                order: 2
            },
            { type: "normal", url: ["Events", "#"], order: 3 },
            { type: "normal", url: ["Scholarship Program", "#"], order: 4 }
        ],
        cta: ["Apply now", "#"],

        headerText: "#BirAddımÖndə",
        subHeaderText: "Learn highly demanded skills through Mehdi courses, created bytrusted industry professionals, that focus on real-world applications.t",

        video: [
            { url: "https://www.w3schools.com/html/mov_bbb.mp4", posterUrl: "https://via.placeholder.com/800x450.png?text=Video+Loading..." }
        ]


    }
];

function createNavigation(navData) {
    const container = document.querySelector('.container');

    // Navigation bar oluşturma
    const navBar = document.createElement('nav');
    navBar.classList.add('navigation-bar');

    // Header blur efekti
    const headerBlurBox = document.createElement('div');
    headerBlurBox.classList.add('header-blur-box');
    const blurImg = document.createElement('img');
    blurImg.src = "../assets/images/Blur (3).png";
    headerBlurBox.appendChild(blurImg);
    navBar.appendChild(headerBlurBox);

    // Logo oluşturma
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = navData.logo[0];
    logoImg.alt = navData.logo[1];
    logoDiv.appendChild(logoImg);
    navBar.appendChild(logoDiv);

    // Nav list oluşturma ve sıralama
    const navList = document.createElement('ul');
    navList.classList.add('nav-list');

    // Navigasyon öğelerini sıralama
    const sortedNavItems = navData.nav.sort((a, b) => a.order - b.order);

    sortedNavItems.forEach(item => {
        const navItem = document.createElement('li');
        if (item.type === 'normal') {
            const link = document.createElement('a');
            link.href = item.url[1];
            link.textContent = item.url[0];
            link.classList.add('nav-item');
            navItem.appendChild(link);
        } else if (item.type === 'dropdown') {
            const dropdownLink = document.createElement('a');
            dropdownLink.href = '#';
            dropdownLink.textContent = 'Fields of Study';
            dropdownLink.classList.add('nav-item');

            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = '../assets/images/Icon.png';
            dropdownIcon.alt = 'Dropdown Icon';

            const innerList = document.createElement('ul');
            innerList.classList.add('inner-list');

            item.urls.forEach(subItem => {
                const innerLi = document.createElement('li');
                const innerLink = document.createElement('a');
                innerLink.href = subItem.url;
                innerLink.textContent = subItem.name;
                innerLink.style.color = "white";
                innerLi.appendChild(innerLink);
                innerList.appendChild(innerLi);
            });

            navItem.classList.add('dropdown');
            navItem.style.position = "relative";
            navItem.appendChild(dropdownLink);
            navItem.appendChild(dropdownIcon);
            navItem.appendChild(innerList);
        }

        navList.appendChild(navItem);
    });

    navBar.appendChild(navList);

    // CTA button
    const ctaBtnNav = document.createElement('custom-button');
    // ctaBtnNav.classList.add('cta-btn-nav');
    ctaBtnNav.setAttribute("type", "url");
    ctaBtnNav.setAttribute("href", "http://example.com");
    ctaBtnNav.setAttribute("style-config",
        "background-color:var(--blue-light); padding: 1rem 2rem; border-radius: 100px; color: var(--white-solid); font-family: var(--font-primary); font-size: var(--font-size-md);line-height: var(--line-height-100);font-weight: var(--font-weight-medium);");
    ctaBtnNav.setAttribute("class", "cta-btn-nav");
    const ctaButton = document.createElement('button');
    const ctaLink = document.createElement('a');
    ctaLink.href = navData.cta[1];
    ctaLink.textContent = navData.cta[0];
    ctaButton.appendChild(ctaLink);
    ctaBtnNav.appendChild(ctaButton);
    navBar.appendChild(ctaBtnNav);

    // Hamburger menu butonu
    const openBtnNav = document.createElement('div');
    openBtnNav.classList.add('open-btn-nav');
    const menuImg = document.createElement('img');
    menuImg.src = "../assets/images/menu-nav-1.png";
    openBtnNav.appendChild(menuImg);
    navBar.appendChild(openBtnNav);

    // Menü yapısını container'a ekleme
    container.appendChild(navBar);

    // Responsive Menu Oluşturma
    createResponsiveMenu(navData);
}

function createResponsiveMenu(navData) {
    const container = document.querySelector('.container');
    const resMenu = document.createElement('div');
    resMenu.classList.add('responsive-menu');

    // Logo ve Close Butonları
    const logoCloseContainer = document.createElement('div');
    logoCloseContainer.classList.add('logo-close-container');

    const resLogo = document.createElement('img');
    resLogo.src = navData.logo[0];
    resLogo.alt = navData.logo[1];

    const closeBtnNav = document.createElement('div');
    closeBtnNav.classList.add('close-btn-nav');
    const closeImg = document.createElement('img');
    closeImg.src = '../assets/images/add.png';
    closeBtnNav.appendChild(closeImg);

    logoCloseContainer.appendChild(resLogo);
    logoCloseContainer.appendChild(closeBtnNav);
    resMenu.appendChild(logoCloseContainer);

    // Responsive Nav List ve sıralama
    const resNavbar = document.createElement('ul');
    resNavbar.classList.add('res-navbar');

    // Navigasyon öğelerini sıralama
    const sortedNavItems = navData.nav.sort((a, b) => a.order - b.order);

    sortedNavItems.forEach(item => {
        const resNavItem = document.createElement('li');
        if (item.type === 'normal') {
            const link = document.createElement('a');
            link.href = item.url[1];
            link.textContent = item.url[0];
            link.classList.add('nav-item');
            resNavItem.appendChild(link);
        } else if (item.type === 'dropdown') {
            const dropdownLink = document.createElement('a');
            dropdownLink.href = '#';
            dropdownLink.textContent = 'Fields of Study';
            dropdownLink.classList.add('nav-item');

            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = '../assets/images/Icon.png';
            dropdownIcon.alt = 'Dropdown Icon';

            const innerList = document.createElement('ul');
            innerList.classList.add('inner-list');
            innerList.style.display = "none";
            innerList.style.position = "absolute";
            innerList.style.top = "30px";
            innerList.style.right = "-60px";

            item.urls.forEach(subItem => {
                const innerLi = document.createElement('li');
                const innerLink = document.createElement('a');
                innerLink.href = subItem.url;
                innerLink.textContent = subItem.name;
                innerLink.style.color = "white";
                innerLi.appendChild(innerLink);
                innerList.appendChild(innerLi);
            });

            resNavItem.style.display = "flex";
            resNavItem.style.position = "relative";
            resNavItem.appendChild(dropdownLink);
            resNavItem.appendChild(dropdownIcon);
            resNavItem.appendChild(innerList);
        }

        resNavbar.appendChild(resNavItem);
    });

    resMenu.appendChild(resNavbar);

    // Responsive CTA Button
    const resCta = document.createElement('custom-button');
    resCta.setAttribute("type", "url");
    resCta.setAttribute("href", "http://example.com");
    resCta.setAttribute("style-config",
        "width:100% ;display:flex; padding:16px 32px ; justify-content: center;align-items: center;margin: 32px 0; background-color:var(--blue-light); padding: 1rem 2rem; border-radius: 100px; color: var(--white-solid); font-family: var(--font-primary); font-size: var(--font-size-md);line-height: var(--line-height-100);font-weight: var(--font-weight-medium);");
    resCta.setAttribute("class", "res-cta");
    // resCta.classList.add('res-cta');
    const resCtaButton = document.createElement('button');
    const resCtaLink = document.createElement('a');
    resCtaLink.href = navData.cta[1];
    resCtaLink.textContent = navData.cta[0];
    resCtaButton.appendChild(resCtaLink);
    resCta.appendChild(resCtaButton);
    resMenu.appendChild(resCta);

    container.appendChild(resMenu);


}

createNavigation(data[0]);

function getHeaderAssests(data) {

    const mainText = document.querySelector("#text-header");

    mainText.textContent = data.headerText;

    const subText = document.querySelector('#sub-text-header');

    subText.textContent = data.subHeaderText;

    const headerVideo = document.querySelector('#video-header');

    headerVideo.setAttribute("src", data.video[0].url);

    headerVideo.setAttribute("poster", data.video[0].posterUrl);

}

getHeaderAssests(data[0]);