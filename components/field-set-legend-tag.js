const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(field-set-legend-tag) {
            /* if my shadow root is field-set-legend-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .field-set-legend-tag {}
    </style>

    <legend class="field-set-legend-tag" part="field-set-legend-tag"></legend>
`;

class FieldSetLegendTag extends HTMLElement {
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

customElements.define('field-set-legend-tag', FieldSetLegendTag);

// <field-set-legend-tag id='some id'>
// </field-set-legend-tag>
