class Skill {
  constructor(root, props) {
    console.log('skill constructor');
    this.children = [];
    this.root = root;
    this.props = props;
  }

  appendChild(child) {
    console.log('Skill appendChild');
    // console.log(child);
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  renderChildren() {
    console.log('skill renderChildren');
    this.children.forEach(child => {
      if (child.name === 'HANDLER') {
        console.log(child.props.render);
        this.root.alexa.registerHandlers({
          [child.props.name]: child.props.render
        })
      }
    });
  }

  render() {
    console.log('skill render');
    this.renderChildren();
  }
}

export default Skill;
