const Alexa = require('../components/Alexa').default;
const Skill = require('../components/Skill').default;
const Handler = require('../components/Handler').default;

// Stores the root container instance
let ROOT_NODE_INSTANCE = null

/**
 * Updates the ref to ROOT_NODE_INSTANCE
 * @param {*} rootNode root instance
 */
function getHostContextNode(rootNode) {
  console.log('getHostContextNode');
  if (typeof rootNode !== undefined) {
    return ROOT_NODE_INSTANCE = rootNode
  } else {
    console.warn(`${rootNode} is not an instance of AlexaSDK constructor.`)    
    // Lazily create the instance (escape hatch if the global state is mutated)
    return ROOT_NODE_INSTANCE = new Alexa();
  }
}

/**
 * Creates an element for a skill
 * @param {string} type Element type
 * @param {Object} props Component props
 * @param {Object} root Root instance
 */

function createElement(type, props) {
  console.log(`Create Element: ${type}`);
  // Hash table lookup is much better than evaluating each case with switch-case
  const COMPONENTS = {
    ROOT: () => new Alexa(props),
    SKILL: () => new Skill(ROOT_NODE_INSTANCE, props),
    HANDLER: () => new Handler(ROOT_NODE_INSTANCE, props),
    default: undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export {
  createElement,
  getHostContextNode,
}