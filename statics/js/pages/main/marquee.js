// Function to create partner elements
function createPartnerElements(data) {
    const container = document.querySelector('.marquee-content'); // Select by class

    data.forEach(partner => {
        // Create the list item
        const listItem = document.createElement('li');
        listItem.classList.add('flex-shrink-0'); // Prevent items from resizing

        // Create the anchor tag
        const anchor = document.createElement('a');
        anchor.href = '#'; // Change to the desired link

        // Create the img for the partner logo
        const img = document.createElement('img');
        img.src = partner.logo; // Set the partner logo URL
        img.alt = partner.name; // Set the alt text for the image
        img.classList.add('h-16', 'w-auto'); // Tailwind for image sizing

        // Append the img to the anchor
        anchor.appendChild(img);
        // Append the anchor to the list item
        listItem.appendChild(anchor);
        // Append the list item to the marquee content
        container.appendChild(listItem);
    });
}

// Function to duplicate content for marquee effect
class Marquee {
    constructor(marqueeSelector, elementsDisplayed) {
        this.marqueeContent = document.querySelector(marqueeSelector);
        this.elementsDisplayed = elementsDisplayed;
        this.originalChildren = Array.from(this.marqueeContent.children);
    }

    duplicateContent() {
        for (let i = 0; i < this.elementsDisplayed; i++) {
            const clone = this.originalChildren[i % this.originalChildren.length].cloneNode(true);
            this.marqueeContent.appendChild(clone);
        }
    }
}


