import Base from './Base';

class Response extends Base {
  getValidChildren() {
    return ['Card', 'Speak'];
  }

  renderChildren() {
    /**
     * Build abstract response object where keys are names of
     * Alexa response objects (Card, Speak, ...) and values
     * are abstract objects that will be parsed to create the response
     */
    console.log('RESPONSE renderChildren');
    return this.children.reduce((acc, child) => {
      acc[child.props.$$type] = child.render();
      return acc;
    }, {});
  }

  render() {
    console.log('\nResponse render\n');
    return this.renderChildren();
  }
}

export default Response;
