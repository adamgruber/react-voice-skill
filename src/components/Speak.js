import Base from './Base';

class Speak extends Base {
  getValidChildren() {
    return [];
  }

  renderChildren() {
    // Single child, simple string
    if (this.children.length === 1 && typeof this.children[0] === 'string') {
      return this.children[0];
    }
    // TODO: Speak can have speechicons as children, need to handle
  }

  render() {
    return {
      content: this.renderChildren(),
      listen: this.props.listen,
    };
  }
}

export default Speak;

/*
<Speak listen="What are you tlaking about?">This is a <Speechicon icon="" /> bla bla blah.<Speak>
*/
