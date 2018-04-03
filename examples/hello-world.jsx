/* eslint import/prefer-default-export: 0 */
import React from 'react';
import { renderToAlexa, VoiceSkill, IntentHandler, Response, Speak } from '../src';
import { IntentRequest, APP_ID } from './fixtures';
import context from './sample_context';

const event = IntentRequest({
  intent: {
    name: 'AMAZON.CancelIntent',
  },
});

// Export for testing
export const MyVoiceSkill = () => (
  <VoiceSkill>
    <IntentHandler intent="SayHello" aliases={['LaunchRequest', 'HelloWorldIntent']}>
      <Response>
        <Speak>Hello World!</Speak>
      </Response>
    </IntentHandler>

    <IntentHandler intent="AMAZON.HelpIntent">
      <Response>
        <Speak listen="Say hello, to hear me speak.">This is the Hello World Sample Skill.</Speak>
      </Response>
    </IntentHandler>

    <IntentHandler intent="AMAZON.CancelIntent">
      <Response>
        <Speak>Goodbye!</Speak>
      </Response>
    </IntentHandler>

    <IntentHandler intent="AMAZON.StopIntent">
      <Response>
        <Speak>See you later!</Speak>
      </Response>
    </IntentHandler>
  </VoiceSkill>
);

renderToAlexa(<MyVoiceSkill />, { appId: APP_ID, event, context });

// exports.handler = function(event, ctx, cb) {
//   renderToAlexa(<MyVoiceSkill />, { appId: XXX, event, context });
// }
