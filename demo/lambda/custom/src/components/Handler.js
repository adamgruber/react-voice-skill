class Handler {
  constructor(root, props) {
    this.children = [];
    this.root = root;
    this.props = props;
    this.name = 'HANDLER';
  }

  appendChild(child) {
    console.log('Handler appendChild');
    // console.log(child);
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  renderChildren() {
    for( let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'object') {
        this.children[i].render();
      }
    }
  }

  render() {
    console.log('Handler render');
    // this.renderChildren();
  }
}

export default Handler;
