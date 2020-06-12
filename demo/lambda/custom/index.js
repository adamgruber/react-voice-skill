const React = require('react');
const { render, Skill, Handler } = require('./src');

const onLaunchRequest = function() {
  console.log('LaunchRequest');
  this.response.speak('Hello World from React!');
  this.emit(':responseReady');
}

const onHelloWorldIntent = () => {
  console.log('HelloWorldIntent');
}

class MySkill extends React.Component {
  render() {
    return (
      <Skill>
        <Handler
          name="LaunchRequest"
          render={ onLaunchRequest } />
        <Handler
          name="HelloWorldIntent"
          render={ onHelloWorldIntent } />
      </Skill>
    )
  }
}

exports.handler = function(event, ctx, cb) {
  render(<MySkill event={ event } context={ ctx } />);
}
