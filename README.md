# react-voice-skill
A renderer and set of components to write Alexa Skills in React. This project uses Alexa Skills Kit SDK for Node.js under the hood.

## Usage

```jsx
const MyVoiceSkill = () => (
  <VoiceSkill>
    <IntentHandler
      intent="LaunchRequest"
      handler={LaunchRequestHandler}
    />
  </VoiceSkill>
);

renderToVoiceSkill(<MyVoiceSkill />, alexa);
```

## Components

### `<VoiceSkill>`

This is our top-level component for creating a voice skill. It must wrap all other components.

Allowed children:
 - IntentHandler

### `<IntentHandler>`

Each recognized voice command initiates an `intent` to handle the command. This component is used to define these handlers.

#### Props

Prop Name | Type | Default  | Required | Description
:-------- | :--- | :------- | :------- | :----------
intent | string | - | true | Name of the intent (ie: 'LaunchRequest')
handler | function | - | false | Function that will be called to handle the request [more](#handler)

**handler**
The handler function will be called with (?????) and is expected to return a `<Response>`.

Allowed children:
- Spoken response in the form of a simple string
- <Response>

### `<Response>`

This is a container for all things related to the response.

### `<Speak>`

Indicates the spoken response.

#### Props

Prop Name | Type | Default  | Required | Description
:-------- | :--- | :------- | :------- | :----------
listen | string | - | false | Reprompt message


```jsx
<Speak>Hello World</Speak>
```


### `<Card>`

#### Props

Prop Name | Type | Default  | Required | Description
:-------- | :--- | :------- | :------- | :----------
title | string | - | true | Title to be displayed
imgSrc | string | - | false | URL to an image to be displayed on the card

Details a card response to be shown on devices that support cards.

```jsx
<Card title="Random Fact" imgSrc="http://example.com/img.jpg">This is a random fact about bananas.</Card>
```