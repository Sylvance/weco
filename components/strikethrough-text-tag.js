const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(strikethrough-text-tag) {
            /* if my shadow root is strikethrough-text-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .strikethrough-text-tag {}
    </style>

    <s class="strikethrough-text-tag" part="strikethrough-text-tag"></s>
`;

class StrikethroughTextTag extends HTMLElement {
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

customElements.define('strikethrough-text-tag', StrikethroughTextTag);

// <strikethrough-text-tag id='some id'>
// </strikethrough-text-tag>
