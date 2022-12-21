import TemplateCreator from '../views/template/template-creator';

class NavbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = TemplateCreator.navBar();
  }
}

customElements.define('navbar-element', NavbarElement);