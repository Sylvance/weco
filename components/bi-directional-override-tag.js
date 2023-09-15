const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(bi-directional-override-tag) {
            /* if my shadow root is bi-directional-override-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .bi-directional-override-tag {}
    </style>

    <bdo class="bi-directional-override-tag" part="bi-directional-override-tag"></bdo>
`;

class BiDirectionalOverrideTag extends HTMLElement {
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

customElements.define('bi-directional-override-tag', BiDirectionalOverrideTag);

// <bi-directional-override-tag id='some id'>
// </bi-directional-override-tag>
