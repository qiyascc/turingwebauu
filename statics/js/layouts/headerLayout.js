class NavigationManager {
    constructor(data) {
        this.data = data;
        this.createNavigation();
        this.createVideoHeader();
    }

    createNavigation() {
        const container = document.querySelector('.container');
        const navBar = this.createNavBar();
        container.appendChild(navBar);
    }

    createNavBar() {
        const navBar = document.createElement('nav');
        navBar.classList.add('navigation-bar');

        const headerBlurBox = this.createHeaderBlurBox();
        navBar.appendChild(headerBlurBox);

        const logoDiv = this.createLogo();
        navBar.appendChild(logoDiv);

        const navList = this.createNavList();
        navBar.appendChild(navList);

        const ctaBtnNav = this.createCtaButton();
        navBar.appendChild(ctaBtnNav);

        const openBtnNav = this.createOpenButton();
        navBar.appendChild(openBtnNav);

        return navBar;
    }

    createHeaderBlurBox() {
        const headerBlurBox = document.createElement('div');
        headerBlurBox.classList.add('header-blur-box');
        const blurImg = document.createElement('img');
        blurImg.src = "../assets/images/Blur (3).png";
        headerBlurBox.appendChild(blurImg);
        return headerBlurBox;
    }

    createLogo() {
        const logoDiv = document.createElement('div');
        logoDiv.classList.add('logo');
        const logoImg = document.createElement('img');
        logoImg.src = this.data.logo[0];
        logoImg.alt = this.data.logo[1];
        logoDiv.appendChild(logoImg);
        return logoDiv;
    }

    createNavList() {
        const navList = document.createElement('ul');
        navList.classList.add('nav-list');

        const sortedNavItems = this.data.nav.sort((a, b) => a.order - b.order);
        sortedNavItems.forEach(item => navList.appendChild(this.createNavItem(item)));

        return navList;
    }

    createNavItem(item) {
        const navItem = document.createElement('li');

        if (item.type === 'normal') {
            const link = document.createElement('a');
            link.href = item.url[1];
            link.textContent = item.url[0];
            link.classList.add('nav-item');
            navItem.appendChild(link);
        } else if (item.type === 'dropdown') {
            navItem.classList.add('dropdown');
            const dropdownLink = this.createDropdownLink();
            navItem.appendChild(dropdownLink);
            const innerList = this.createDropdownList(item.urls);
            navItem.appendChild(innerList);
        }

        return navItem;
    }

    createDropdownLink() {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = 'Fields of Study';
        link.classList.add('nav-item');
        return link;
    }

    createDropdownList(urls) {
        const innerList = document.createElement('ul');
        innerList.classList.add('inner-list');

        urls.forEach(subItem => {
            const innerLi = document.createElement('li');
            const innerLink = document.createElement('a');
            innerLink.href = subItem.url;
            innerLink.textContent = subItem.name;
            innerLink.style.color = "white";
            innerLi.appendChild(innerLink);
            innerList.appendChild(innerLi);
        });

        return innerList;
    }

    createCtaButton() {
        const ctaBtnNav = document.createElement('custom-button');
        ctaBtnNav.setAttribute("type", "url");
        ctaBtnNav.setAttribute("href", this.data.cta[1]);
        ctaBtnNav.setAttribute("style-config", "background-color:var(--blue-light); padding: 1rem 2rem; border-radius: 100px; color: var(--white-solid);");
        const ctaLink = document.createElement('a');
        ctaLink.href = this.data.cta[1];
        ctaLink.textContent = this.data.cta[0];
        ctaBtnNav.appendChild(ctaLink);
        return ctaBtnNav;
    }

    createOpenButton() {
        const openBtnNav = document.createElement('div');
        openBtnNav.classList.add('open-btn-nav');
        const menuImg = document.createElement('img');
        menuImg.src = "../assets/images/menu-nav-1.png";
        openBtnNav.appendChild(menuImg);
        return openBtnNav;
    }

    createVideoHeader() {
        // Find the existing video element
        const videoElement = document.getElementById('video-header');
        
        // Create source element only if it does not exist
        if (videoElement) {
            const sourceElement = document.createElement('source');
            sourceElement.src = this.data.video[0].url;
            sourceElement.type = 'video/mp4';

            // Append the source to the video element
            videoElement.appendChild(sourceElement);
        } else {
            // If video element does not exist, create it
            const videoHeader = document.createElement('div');
            videoHeader.classList.add('video-header');

            const newVideoElement = document.createElement('video');
            newVideoElement.id = 'video-header';
            newVideoElement.autoplay = true;
            newVideoElement.muted = true;
            newVideoElement.width = "100%";
            newVideoElement.type = 'video/mp4';

            const sourceElement = document.createElement('source');
            sourceElement.src = this.data.video[0].url;
            sourceElement.type = 'video/mp4';

            newVideoElement.appendChild(sourceElement);
            videoHeader.appendChild(newVideoElement);

            // Fallback text in case the browser does not support the video tag
            const fallbackText = document.createElement('p');
            fallbackText.textContent = "Your browser does not support the video tag.";
            videoHeader.appendChild(fallbackText);

            document.querySelector('.container').appendChild(videoHeader);
        }
    }

    createResponsiveMenu() {
        const resMenu = document.createElement('div');
        resMenu.classList.add('responsive-menu');
        const logoCloseContainer = this.createLogoCloseContainer();
        resMenu.appendChild(logoCloseContainer);
        
        const resNavbar = this.createResponsiveNavList();
        resMenu.appendChild(resNavbar);

        const resCta = this.createResponsiveCtaButton();
        resMenu.appendChild(resCta);

        document.querySelector('.container').appendChild(resMenu);
    }

    createLogoCloseContainer() {
        const container = document.createElement('div');
        container.classList.add('logo-close-container');

        const resLogo = document.createElement('img');
        resLogo.src = this.data.logo[0];
        resLogo.alt = this.data.logo[1];

        const closeBtnNav = document.createElement('div');
        closeBtnNav.classList.add('close-btn-nav');
        const closeImg = document.createElement('img');
        closeImg.src = '../assets/images/add.png';
        closeBtnNav.appendChild(closeImg);

        container.appendChild(resLogo);
        container.appendChild(closeBtnNav);
        return container;
    }

    createResponsiveNavList() {
        const resNavbar = document.createElement('ul');
        resNavbar.classList.add('res-navbar');

        const sortedNavItems = this.data.nav.sort((a, b) => a.order - b.order);
        sortedNavItems.forEach(item => resNavbar.appendChild(this.createResponsiveNavItem(item)));

        return resNavbar;
    }

    createResponsiveNavItem(item) {
        const resNavItem = document.createElement('li');
        if (item.type === 'normal') {
            const link = document.createElement('a');
            link.href = item.url[1];
            link.textContent = item.url[0];
            link.classList.add('nav-item');
            resNavItem.appendChild(link);
        } else if (item.type === 'dropdown') {
            const dropdownLink = this.createDropdownLink();
            resNavItem.appendChild(dropdownLink);
            const innerList = this.createDropdownList(item.urls);
            resNavItem.appendChild(innerList);
        }
        return resNavItem;
    }

    createResponsiveCtaButton() {
        const resCta = document.createElement('custom-button');
        resCta.setAttribute("type", "url");
        resCta.setAttribute("href", this.data.cta[1]);
        resCta.setAttribute("style-config", "width:100%; padding:16px 32px; background-color:var(--blue-light); border-radius: 100px; color: var(--white-solid);");
        
        const resCtaLink = document.createElement('a');
        resCtaLink.href = this.data.cta[1];
        resCtaLink.textContent = this.data.cta[0];
        resCta.appendChild(resCtaLink);

        return resCta;
    }
}