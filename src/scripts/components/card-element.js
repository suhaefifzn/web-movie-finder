import TemplateCreator from '../views/template/template-creator';

class CardElement extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    this.innerHTML = TemplateCreator.card(this._content);
  }
}

customElements.define('card-element', CardElement);