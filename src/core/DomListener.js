import { capitalize } from './utils';

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

export class DomListener {
  constructor(domRoot, listeners = []) {
    console.log('domRoot =>', domRoot);
    if (!domRoot) {
      throw new Error('No root provided for DomListener');
    }
    this.domRoot = domRoot;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(lestener => {
      const method = getMethodName(lestener);
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`);
      }
      this.domRoot.on(lestener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    //realize!
  }
}
