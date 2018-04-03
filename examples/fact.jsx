/* eslint import/prefer-default-export: 0 */
import React from 'react';
import { renderToAlexa, VoiceSkill, IntentHandler, Response, Speak, Card } from '../src';
import { IntentRequest, APP_ID } from './fixtures';
import context from './sample_context';

const event = IntentRequest({
  intent: {
    name: 'AMAZON.HelpIntent',
  },
});

const SKILL_NAME = 'Space Facts';
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const GetNewFactIntentHandler = () => {
  const factArr = [
    'A year on Mercury is just 88 days long.',
    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
    'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
    'On Mars, the Sun appears about half the size as it does on Earth.',
    'Earth is the only planet not named after a god.',
    'Jupiter has the shortest day of all the planets.',
    'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
    'The Sun contains 99.86% of the mass in the Solar System.',
    'The Sun is an almost perfect sphere.',
    'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
    'Saturn radiates two and a half times more energy into space than it receives from the sun.',
    'The temperature inside the Sun can reach 15 million degrees Celsius.',
    'The Moon is moving approximately 3.8 cm away from our planet every year.',
  ];

  const factIndex = Math.floor(Math.random() * factArr.length);
  const randomFact = factArr[factIndex];
  const speechOutput = `Here's your fact: ${randomFact}`;

  return (
    <Response>
      <Card title={SKILL_NAME} imgSrc="">{randomFact}</Card>
      <Speak listen="What did you say?">{speechOutput}</Speak>
    </Response>
  );
};

// Export for testing
export const MyVoiceSkill = () => (
  <VoiceSkill>
    <IntentHandler
      aliases={['LaunchRequest']}
      intent="GetNewFactIntent"
      handler={GetNewFactIntentHandler}
    />

    <IntentHandler intent="AMAZON.HelpIntent">
      <Response>
        <Speak listen={HELP_REPROMPT}>{HELP_MESSAGE}</Speak>
      </Response>
    </IntentHandler>

    <IntentHandler
      aliases={['AMAZON.CancelIntent']}
      intent="AMAZON.StopIntent"
    >
      <Response>
        <Speak>{STOP_MESSAGE}</Speak>
      </Response>
    </IntentHandler>
  </VoiceSkill>
);

renderToAlexa(<MyVoiceSkill />, { appId: APP_ID, event, context });

// exports.handler = function(event, ctx, cb) {
//   renderToAlexa(<MyVoiceSkill />, { appId: XXX, event, context });
// }
