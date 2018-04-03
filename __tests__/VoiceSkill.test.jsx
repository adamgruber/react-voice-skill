import React from 'react';
import { VoiceSkill, IntentHandler, Response } from '../src';
import VoiceSkillComp from '../src/components/VoiceSkill';
import render from './testRenderer';
import { IntentRequest, APP_ID } from '../examples/fixtures';
import context from '../examples/sample_context';

describe('VoiceSkill', () => {
  let App;
  let event;

  const renderApp = () => render(<App />, { appId: APP_ID, event, context });

  beforeEach(() => {
    event = IntentRequest({
      intent: {
        name: 'LaunchRequest',
      },
    });
  });

  it('should render element', () => {
    App = () => <VoiceSkill />;
    expect(renderApp()).toMatchSnapshot();
  });

  it('should render element with children', () => {
    App = () => (
      <VoiceSkill>
        <IntentHandler intent="LaunchRequest" />
      </VoiceSkill>
    );
    expect(renderApp()).toMatchSnapshot();
  });

  it('should throw with invalid children', () => {
    App = () => (
      <VoiceSkill>
        <Response />
      </VoiceSkill>
    );
    expect(() => renderApp()).toThrow('Response is not a valid child of VoiceSkill');
  });

  describe('getValidChildren', () => {
    let comp;

    beforeEach(() => {
      comp = new VoiceSkillComp();
    });

    it('should return array of valid child types', () => {
      expect(comp.getValidChildren()).toEqual(['IntentHandler']);
    });
  });
});
