import TemplateCreator from '../views/template/template-creator';

class SearchElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = TemplateCreator.searchBar();
  }
}

customElements.define('search-element', SearchElement);