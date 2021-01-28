class Dom {
  constructor(selector) {
    this.domEl = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.domEl.innerHTML = html;
      return this;
    }
    return this.domEl.outerHTML.trim();
  }

  on(eventType, callback) {
    this.domEl.addEventListener(eventType, callback);
  }

  clear() {
    this.html('');
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.domEl;
    }
    if (Element.prototype.append) {
      this.domEl.append(node);
    } else {
      this.domEl.appendChild(node);
    }
    return this;
  }
}

// event.target
export function dom(selector) {
  return new Dom(selector);
}

dom.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return dom(el);
};
