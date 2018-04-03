import Base from './Base';

class Card extends Base {
  render() {
    const { title, children, imgSrc } = this.props;
    return { title, content: children, imgSrc };
  }
}

export default Card;
