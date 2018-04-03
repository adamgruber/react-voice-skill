import Alexa from 'alexa-sdk';
import { EventEmitter } from 'events';
import VoiceSkill from '../components/VoiceSkill';
import IntentHandler from '../components/IntentHandler';
import Response from '../components/Response';
import Speak from '../components/Speak';
import Card from '../components/Card';

let ROOT_NODE = null;
let RESPONSE_ROOT_NODE = null;

/**
 * Updates the ref to ROOT_NODE / RESPONSE_ROOT_NODE
 *
 * @param {*} rootNode root instance
 */
function getHostContext(rootNode) {
  console.log('getHostContext');
  if (rootNode instanceof EventEmitter) {
    return ROOT_NODE = rootNode;
  }

  return RESPONSE_ROOT_NODE = rootNode;
}

/**
 * Creates an element for a skill
 *
 * @param {string} type Element type
 * @param {Object} props Component props
 * @returns {Object}
 */
function createElement(type, props) {
  console.log(`Create Element: ${type}\n`);
  // console.log(props);
  // console.log(ROOT_NODE);

  const components = {
    ROOT: () => {
      const alexa = Alexa.handler(props.event, props.context);
      alexa.appId = props.appId;
      return alexa;
    },
    RESPONSE_ROOT: () => props.handlerContext,

    VOICESKILL: () => new VoiceSkill(null, { ...props, $$type: 'VoiceSkill' }),
    INTENTHANDLER: () => new IntentHandler(ROOT_NODE, { ...props, $$type: 'IntentHandler' }),

    RESPONSE: () => new Response(RESPONSE_ROOT_NODE, { ...props, $$type: 'Response' }),
    SPEAK: () => new Speak(RESPONSE_ROOT_NODE, { ...props, $$type: 'Speak' }),
    CARD: () => new Card(RESPONSE_ROOT_NODE, { ...props, $$type: 'Card' }),
  };

  const elementCreator = components[type];

  if (elementCreator) {
    return elementCreator();
  } else {
    throw new Error(`Unknown element: ${type}`);
  }
}

export {
  createElement,
  getHostContext,
};
