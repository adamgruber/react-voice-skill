export const APP_ID = 'amzn1.ask.skill.TEST';

const baseRequest = {
  session: {
    new: true,
    sessionId: 'amzn1.echo-api.session.[unique-value-here]',
    attributes: {},
    user: {
      userId: 'amzn1.ask.account.[unique-value-here]',
    },
    application: {
      applicationId: APP_ID,
    },
  },
  version: '1.0',
  context: {
    AudioPlayer: {
      playerActivity: 'IDLE',
    },
    System: {
      device: {
        supportedInterfaces: {
          AudioPlayer: {},
        },
      },
      application: {
        applicationId: APP_ID,
      },
      user: {
        userId: 'amzn1.ask.account.[unique-value-here]',
      },
    },
  },
};

export const IntentRequest = attrs => ({
  ...baseRequest,
  session: {
    ...baseRequest.session,
    new: false,
  },
  request: {
    locale: 'en-US',
    timestamp: new Date().toISOString(),
    type: 'IntentRequest',
    requestId: 'amzn1.echo-api.request.[unique-value-here]',
    ...attrs,
  },
});
