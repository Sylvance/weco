const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(ruby-parenthesis-tag) {
            /* if my shadow root is ruby-parenthesis-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .ruby-parenthesis-tag {}
    </style>

    <rp class="ruby-parenthesis-tag" part="ruby-parenthesis-tag"></rp>
`;

class RubyParenthesisTag extends HTMLElement {
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

customElements.define('ruby-parenthesis-tag', RubyParenthesisTag);

// <ruby-parenthesis-tag id='some id'>
// </ruby-parenthesis-tag>
