const { createElement } = require('../utils');
const AlexaRenderer = require('./renderer').default;
// import parse from './parse';
// import { validateElement, validatePath, Events, openDocApp } from '../utils/renderUtils';

/**
 * This function renders the component
 * @param {Object} element
 * @param {string} filePath 
 */
function render(element) {
  const container = createElement('ROOT', element.props);

  // validateElement(element);

  const node = AlexaRenderer.createContainer(container);
  AlexaRenderer.updateContainer(element, node, null);

  container.skill.render();
  container.alexa.execute();
}

/**
 * Required for test the components
 */
function testRenderer(element) {
  const container = createElement('ROOT');
  const node = AlexaRenderer.createContainer(container);

  AlexaRenderer.updateContainer(element, node, null);

  return container;
}

export { render, testRenderer };
