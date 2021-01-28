import { DomListener } from './DOMlistener';

export class ExcelComponent extends DomListener {
  constructor(domEl, options = {}) {
    super(domEl, options.listeners);
    this.name = options.name;
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
