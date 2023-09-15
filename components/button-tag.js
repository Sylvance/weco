const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(button-tag) {
            /* if my shadow root is button-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .button-tag {}
    </style>

    <button class="button-tag" part="button-tag"></button>
`;

class ButtonTag extends HTMLElement {
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

customElements.define('button-tag', ButtonTag);

// <button-tag id='some id'>
// </button-tag>
