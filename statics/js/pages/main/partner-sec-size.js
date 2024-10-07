class PartnyorBoxAdjuster {
    constructor(itemSelector, testBoxSelector, maxWidth = 968) {
        this.partnyorItem = document.querySelector(itemSelector);
        this.partnyorTestBox = document.querySelector(testBoxSelector);
        this.maxWidth = maxWidth;

        this.init();
    }

    // Initialize event listeners and adjust height on page load or resize
    init() {
        window.addEventListener('load', this.adjustHeight.bind(this));
        window.addEventListener('resize', this.adjustHeight.bind(this));
    }

    // Adjust the height of the test box based on the partnyor item, only if window width is above maxWidth
    adjustHeight() {
        if (window.innerWidth < this.maxWidth) {
            this.resetHeight(); // Optionally reset the height when below the threshold
            return;
        }

        if (this.partnyorItem && this.partnyorTestBox) {
            const partnyorItemHeight = this.partnyorItem.offsetHeight;
            this.partnyorTestBox.style.height = `${partnyorItemHeight}px`;
        }
    }

    // Optional: Reset the height of the test box when below the maxWidth
    resetHeight() {
        if (this.partnyorTestBox) {
            this.partnyorTestBox.style.height = ''; // Reset to default
        }
    }
}

// Example usage
const partnyorAdjuster = new PartnyorBoxAdjuster('.partnyor-item', '.partnyor-test-box');
