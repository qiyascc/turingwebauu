class MetaTagManager {
    constructor(metaConfig = {}) {
        if (!document.head) {
            throw new Error("Document head not found.");
        }
        this.metaConfig = metaConfig;
    }

    applyMetaTags() {
        for (const [key, value] of Object.entries(this.metaConfig)) {
            if (key === 'httpEquiv') {
                for (const [httpEquivKey, httpEquivValue] of Object.entries(value)) {
                    this.addHttpEquivMetaTag(httpEquivKey, httpEquivValue);
                }
            } else {
                this.addMetaTag(key, value);
            }
        }
    }

    addMetaTag(name, content) {
        if (!name || !content) {
            console.error(`Meta tag creation failed. Missing 'name' or 'content'.`);
            return this;
        }

        const meta = this._createMetaElement();
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);

        document.head.appendChild(meta);
        return this;
    }

    addHttpEquivMetaTag(httpEquiv, content) {
        if (!httpEquiv || !content) {
            console.error(`Meta tag creation failed. Missing 'http-equiv' or 'content'.`);
            return this;
        }

        const meta = this._createMetaElement();
        meta.setAttribute('http-equiv', httpEquiv);
        meta.setAttribute('content', content);

        document.head.appendChild(meta);
        return this;
    }

    _createMetaElement() {
        return document.createElement('meta');
    }
}