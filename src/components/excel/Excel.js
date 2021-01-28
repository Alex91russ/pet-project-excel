import { dom } from '../../core/dom';

export class Excel {
  constructor(selector, options) {
    this.domEl = dom(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const domRoot = dom.create('div', 'excel');
    this.components = this.components.map(Component => {
      const domEl = dom.create('div', Component.className);
      const component = new Component(domEl);
      domEl.html(component.toHTML());
      domRoot.append(domEl);
      return component;
    });

    return domRoot;
  }

  render() {
    this.domEl.append(this.getRoot());
    this.components.forEach(component => {
      component.init();
    });
  }
}
