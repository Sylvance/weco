const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        span {}

        a {}

        :host {
            /* for the shadow root */
            display: block;
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .weco-anchor-tag-container {}
    </style>

    <span class="weco-anchor-tag-container">
        <a part="weco-anchor-tag">
            <slot name='icon'></slot>
            <slot name='text'></slot>
        </a>
    </span>
`;

class AnchorTag extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'closed' });
        this.root.innerHTML = template.innerHTML;
    }

    // Define observed attributes
    static get observedAttributes() {
        return ['text', 'icon'];
    }

    get text() {
        return this.getAttribute('text');
    }

    set text(value) {
        this.setAttribute('text', value);
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    // Handle changes to attributes
    attributeChangedCallback(attrName, _oldVal, newVal) {
        const span = this.root.querySelector('span');
        const a = span.querySelector('a') || document.createElement('a');

        if (attrName.toLowerCase() === 'text') {
            const textSlot = a.querySelector('slot[name=text]');
            textSlot.textContent = newVal;
            span.append(a);
        }

        if (attrName.toLowerCase() === 'icon') {
            const iconSlot = a.querySelector('slot[name=icon]');
            iconSlot.textContent = newVal;
            span.append(a);
        }
    }
}

customElements.define('anchor-tag', AnchorTag);

// <anchor-tag text='Leonard' icon='cornflowerblue'>
//     <span slot='text'>Best Series</h2>
//     <i slot='icon' class="fa fa-address-book" aria-hidden="true"></i>
// </anchor-tag>
