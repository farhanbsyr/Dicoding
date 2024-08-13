class ImageFigure extends HTMLElement {
  static get observedAtribut() {
    return ["img", "imgAlt", "caption"];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }
  connectedCallback() {
    this.render();
  }

  set img(value) {
    const hasChange = this.img != value;
    if (hasChange) {
      this.removeAttribute("img");
    }
    this.setAttribute("img", value);
  }

  get img() {
    const value = this.getAttribute("img");
    return value;
  }

  set imgAlt(value) {
    const hasChange = this.imgAlt != value;
    if (hasChange) {
      this.removeAttribute("imgAlt");
    }
    this.setAttribute("imgAlt", value);
  }

  get imgAlt() {
    const value = this.getAttribute("imgAlt");
    return value;
  }

  set caption(value) {
    const hasChange = this.caption != value;
    if (hasChange) {
      this.removeAttribute("caption");
    }
    this.setAttribute("caption", value);
  }

  get caption() {
    const value = this.getAttribute("caption");
    return value;
  }

  updateStyle() {
    this._style.textContent = `
      :host {
        display :block;
      }

      figure{
        max-width: 300px;
        padding : 5px;
        border : 1px solid gray;
        display :flex; 
        flex-direction:column;
      }
      figure > img {
        width: 100%;
      }

      figure >  figcaption{
        background-color: black;
        color : white;
        text-align : center;
        padding: 4px
      }
    `;
  }
  render() {
    this.updateStyle();
    this._shadowRoot.innerHTML += `
    ${this._style.outerHTML}
    <figure>
      <slot></slot>
        <img src=${this.img} alt="${this.imgAlt}" width="200">
        <figcaption>${this.caption}</figcaption>
      </slot>
    </figure>
 `;
  }

  attributeChangeCallback(name, oldValue, newValue) {
    this.render();
  }
}
customElements.define("image-figure", ImageFigure);
export default ImageFigure;
