import { createElement } from 'react';
import Base from './Base';
import { renderAlexaResponse } from '../renderer';

class IntentHandler extends Base {
  getValidChildren() {
    return ['Response'];
  }

  renderChildren(handlerContext) {
    const firstChild = this.children[0];

    console.log('IntentHandler renderChildren');
    // console.log(this.children);

    // If there is a handler prop, call it with our handlerContext object
    if (typeof this.props.handler === 'function') {
      const handlerResponse = this.props.handler();
      console.log(handlerResponse);

      // Handlers must return a <Response> element which we need to render
      if (typeof handlerResponse !== 'object') {
        throw new Error('IntentHandler handler function must return a single <Response> element.');
      }

      return renderAlexaResponse(handlerResponse, handlerContext);
    }

    // If there are no children, throw an error
    if (!firstChild) {
      throw new Error('IntentHandler must implement `handler` prop when used without children.');
    }

    // If there are multiple children, throw an error
    if (this.children.length > 1) {
      throw new Error('IntentHandler can only wrap a single <Response> child.');
    }

    // If child is not a <Response>, throw an error
    if (firstChild.props.$$type !== 'Response') {
      throw new Error('IntentHandler can only wrap a single <Response> child.');
    }

    // Turn our Response into a React element and render it
    return renderAlexaResponse(
      createElement('RESPONSE', { ...firstChild.props }),
      handlerContext,
    );

    // If there is only one child and it is a string, call `speak`
    // if (this.children.length === 1 && typeof this.children[0] === 'string') {
    //   this.speak(this.children[0]);
    // }
  }

  /**
   * Render method. Gets the handler context from the SDK and
   * extends this class with its properties to make creating responses easier.
   *
   * @param {object} handlerContext Context object passed to the request handler
   */
  render(handlerContext) {
    // Render our children (builds up our response)
    this.renderChildren(handlerContext);
  }
}

export default IntentHandler;
