const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(option-selector-tag) {
            /* if my shadow root is option-selector-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .option-selector-tag {}
    </style>

    <select class="option-selector-tag" part="option-selector-tag"></select>
`;

class OptionSelectorTag extends HTMLElement {
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

customElements.define('option-selector-tag', OptionSelectorTag);

// <option-selector-tag id='some id'>
// </option-selector-tag>
