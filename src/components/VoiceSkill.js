/* eslint func-names: 0 */
import Base from './Base';

class VoiceSkill extends Base {
  getValidChildren() {
    return ['IntentHandler'];
  }

  renderChildren() {
    const handlers = {};
    this.children.forEach((child) => {
      console.log('\nVoiceSkill render child:');
      const { intent, aliases } = child.props;
      const intents = [intent].concat(aliases || []);
      intents.forEach((intentName) => {
        handlers[intentName] = function () {
          child.render(this);
        };
      });
    });
    return handlers;
  }


  render() {
    console.log('VoiceSkill render');
    return this.renderChildren();
  }
}

export default VoiceSkill;
