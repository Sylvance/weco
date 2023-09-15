const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(table-data-cell-tag) {
            /* if my shadow root is table-data-cell-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .table-data-cell-tag {}
    </style>

    <td class="table-data-cell-tag" part="table-data-cell-tag"></td>
`;

class TableDataCellTag extends HTMLElement {
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

customElements.define('table-data-cell-tag', TableDataCellTag);

// <table-data-cell-tag id='some id'>
// </table-data-cell-tag>
