import { createElement } from '../src/utils';
import { AlexaRenderer } from '../src/renderer';

/**
 * Required for testing the components
 */
const testRenderer = (element, { appId, event, context }) => {
  const container = createElement('ROOT', { appId, event, context });
  const node = AlexaRenderer.createContainer(container);
  AlexaRenderer.updateContainer(element, node, null);
  return {
    component: container.skill,
    rendered: container.skill.render(),
  };
  // return container.execute();
};

export default testRenderer;

