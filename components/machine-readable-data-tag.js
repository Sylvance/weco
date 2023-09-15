const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(machine-readable-data-tag) {
            /* if my shadow root is machine-readable-data-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .machine-readable-data-tag {}
    </style>

    <data class="machine-readable-data-tag" part="machine-readable-data-tag"></data>
`;

class MachineReadableDataTag extends HTMLElement {
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

customElements.define('machine-readable-data-tag', MachineReadableDataTag);

// <machine-readable-data-tag id='some id'>
// </machine-readable-data-tag>
