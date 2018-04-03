import React from 'react';
import { renderToAlexa } from '../../src/renderer';
import { IntentRequest, APP_ID } from '../../examples/fixtures';
import { MyVoiceSkill as App } from '../../examples/fact';

describe('HelloWorld', () => {
  let context;

  const renderApp = evt => renderToAlexa(<App />, { appId: APP_ID, event: evt, context });
  const makeEvent = intent => IntentRequest({ intent: { name: intent } });

  beforeEach(() => {
    context = {
      succeed: jest.fn(),
    };
  });

  [
    'AMAZON.HelpIntent',
    'AMAZON.CancelIntent',
    'AMAZON.StopIntent',
  ].forEach((intent) => {
    it(`should generate output for ${intent} intent`, () => {
      renderApp(makeEvent(intent));
      expect(context.succeed.mock.calls[0]).toMatchSnapshot();
    });
  });

  [
    'LaunchRequest',
    'GetNewFactIntent',
  ].forEach((intent) => {
    it(`should generate output for ${intent} intent`, () => {
      renderApp(makeEvent(intent));
      expect(context.succeed.mock.calls[0]).toEqual([expect.objectContaining({
        response: {
          card: {
            content: expect.any(String),
            title: 'Space Facts',
            type: 'Simple',
          },
          outputSpeech: {
            ssml: expect.any(String),
            type: 'SSML',
          },
          reprompt: {
            outputSpeech: {
              ssml: '<speak> What did you say? </speak>',
              type: 'SSML',
            },
          },
          shouldEndSession: false,
        },
        sessionAttributes: {},
        userAgent: 'ask-nodejs/1.0.25 Node/v8.9.0',
        version: '1.0',
      })]);
    });
  });
});
