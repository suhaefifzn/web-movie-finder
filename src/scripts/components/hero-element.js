import TemplateCreator from '../views/template/template-creator';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = TemplateCreator.hero();
  }
}

customElements.define('hero-element', HeroElement);