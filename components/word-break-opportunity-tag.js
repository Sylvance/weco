const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(word-break-opportunity-tag) {
            /* if my shadow root is word-break-opportunity-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .word-break-opportunity-tag {}
    </style>

    <wbr class="word-break-opportunity-tag" part="word-break-opportunity-tag"></wbr>
`;

class WordBreakOpportunityTag extends HTMLElement {
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

customElements.define('word-break-opportunity-tag', WordBreakOpportunityTag);

// <word-break-opportunity-tag id='some id'>
// </word-break-opportunity-tag>
