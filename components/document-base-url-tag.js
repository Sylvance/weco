const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(document-base-url-tag) {
            /* if my shadow root is document-base-url-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .document-base-url-tag {}
    </style>

    <base class="document-base-url-tag" part="document-base-url-tag"></base>
`;

class DocumentBaseUrlTag extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'closed' });
        this.root.innerHTML = template.innerHTML;
    }

    // Define allowed attributes
    static get observedAttributes() {
        return [];
    }

    // Handle values and changes to the attributes
    attributeChangedCallback(_attrName, _oldVal, _newVal) {
        // Handle attribute changes here if needed
    }
}

customElements.define('document-base-url-tag', DocumentBaseUrlTag);

// <document-base-url-tag id='some id'>
// </document-base-url-tag>
