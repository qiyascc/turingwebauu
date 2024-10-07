class TitleManager {
    constructor(titleConfig = {}) {
        if (!titleConfig || !titleConfig.title) {
            console.error("No title provided in the configuration. Using default title.");
            this.titleConfig = { title: "Default Website Title" };
        } else {
            this.titleConfig = titleConfig;
        }
        this.setTitle();
    }

    setTitle() {
        document.title = this.titleConfig.title;
    }
}