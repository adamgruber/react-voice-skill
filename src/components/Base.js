class BaseComponent {
  constructor(root, props = {}) {
    console.log('BaseComponent constructor');
    // console.log(root);
    // console.log(props);
    // console.log('\n');
    this.children = [];
    this.root = root;
    this.props = props;
    this.type = props.$$type;
  }

  appendChild(child) {
    this.validateChild(child);
    this.children.push(child);
  }

  removeChild(child) {
    console.log('BaseComponent removeChild');
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  getValidChildren() {}

  validateChild(child) {
    // Strings are always valid
    if (typeof child === 'string') return;

    const validChildren = this.getValidChildren();
    if (!validChildren) {
      throw new Error('Components must implement a getValidChildren method that returns an array of valid child types.');
    }

    if (!child.type) {
      throw new Error('Components must have a type.');
    }

    if (!validChildren.includes(child.type)) {
      throw new Error(`${child.type} is not a valid child of ${this.type}.`);
    }
  }
}

export default BaseComponent;
