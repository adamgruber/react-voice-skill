import React from 'react';
import { renderToAlexa } from '../../src/renderer';
import { IntentRequest, APP_ID } from '../../examples/fixtures';
import { MyVoiceSkill as App } from '../../examples/hello-world';

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
    'SayHello',
    'LaunchRequest',
    'HelloWorldIntent',
    'AMAZON.HelpIntent',
    'AMAZON.CancelIntent',
    'AMAZON.StopIntent',
  ].forEach((intent) => {
    it(`should generate output for ${intent} intent`, () => {
      renderApp(makeEvent(intent));
      expect(context.succeed.mock.calls[0]).toMatchSnapshot();
    });
  });
});
