const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Uncomment and provide a URL if you want to import an external stylesheet */
        /* @import url(); */

        :host {
            /* for the shadow root */
            display: block;
        }

        :host(media-text-track-tag) {
            /* if my shadow root is media-text-track-tag */
        }

        :host-context(main) {
            /* if one of my ancestors is main */
        }

        ::slotted(*) {
            /* anything that is slotted */
        }

        .media-text-track-tag {}
    </style>

    <track class="media-text-track-tag" part="media-text-track-tag"></track>
`;

class MediaTextTrackTag extends HTMLElement {
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

customElements.define('media-text-track-tag', MediaTextTrackTag);

// <media-text-track-tag id='some id'>
// </media-text-track-tag>
