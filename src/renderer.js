/* eslint no-param-reassign: 0 */
import ReactFiberReconciler from 'react-reconciler';
import { createElement, getHostContext } from './utils';

const noop = () => {};

const AlexaRenderer = ReactFiberReconciler({
  appendInitialChild(parentInstance, child) {
    console.log('appendInitialChild');
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    } else {
      parentInstance.skill = child;
    }
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props, internalInstanceHandle);
  },

  createTextInstance(text) {
    return text;
  },

  finalizeInitialChildren() {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit: noop,

  prepareUpdate() {
    return true;
  },

  resetAfterCommit: noop,
  resetTextContent: noop,

  getRootHostContext(rootInstance) {
    return getHostContext(rootInstance);
  },

  getChildHostContext() {
    return {};
  },

  shouldSetTextContent() {
    return false;
  },

  now: noop,

  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      console.log('mutation appendInitialChild');
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.skill = child;
      }
    },

    appendChildToContainer(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        switch (child.type) {
          case 'VoiceSkill':
            parentInstance.skill = child;
            break;

          case 'Response':
            parentInstance.res = child;
            break;

          default:
            // ignore
        }
      }
    },

    removeChild: noop,
    removeChildFromContainer: noop,
    insertBefore: noop,
    commitUpdate: noop,
    commitMount: noop,
    commitTextUpdate: noop,
  },
});

/**
 * @param  {ReactElement} element
 * @param {object} options
 * @param {string} options.appId Alexa App ID
 * @param {object} options.event Lambda request event
 * @param {object} options.context Lambda request context
 * @return {object}
 */
const renderToAlexa = (element, { appId, event, context }) => {
  const container = createElement('ROOT', { appId, event, context });
  const node = AlexaRenderer.createContainer(container);
  AlexaRenderer.updateContainer(element, node, null);
  const handlers = container.skill.render();
  console.log(handlers);
  container.registerHandlers(handlers);
  return container.execute();
};

/**
 * @param  {ReactElement} element
 * @param {object} handlerContext ASK SDK Handler Context
 * @return {object}
 */
const renderAlexaResponse = (element, handlerContext) => {
  const container = createElement('RESPONSE_ROOT', { handlerContext });
  const node = AlexaRenderer.createContainer(container);
  AlexaRenderer.updateContainer(element, node, null);

  // Get our response object from rendering components
  const response = container.res.render();
  console.log(response);

  // Parse the response object to build our Alexa response
  Object.keys(response).forEach((type) => {
    const res = response[type];
    switch (type) {
      case 'Card':
        container.response.cardRenderer(res.title, res.content, res.imgSrc);
        break;

      case 'Speak':
        container.response.speak(res.content);
        if (res.listen) {
          container.response.listen(res.listen);
        }
        break;

      default:
        // ignore
    }
  });
  return container.emit(':responseReady');
};

export {
  AlexaRenderer,
  renderToAlexa,
  renderAlexaResponse,
};
