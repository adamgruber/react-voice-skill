const AlexaSDK = require("alexa-sdk");

class Alexa {
  constructor({ event, context }) {
    console.log(event.request);
    this.alexa = AlexaSDK.handler(event, context);
  }
}

export default Alexa;
