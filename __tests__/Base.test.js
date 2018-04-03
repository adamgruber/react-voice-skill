import Base from '../src/components/Base';

describe('Base Component', () => {
  let subject;
  beforeEach(() => {
    subject = new Base();
  });

  it('should have base properties', () => {
    expect(subject).toMatchSnapshot();
  });

  describe('appendChild', () => {
    beforeEach(() => {
      subject.validateChild = jest.fn();
      subject.appendChild();
    });

    it('should call validateChild', () => {
      expect(subject.validateChild).toHaveBeenCalled();
    });
  });

  describe('getValidChildren', () => {
    it('should return false', () => {
      expect(subject.getValidChildren()).toBe(undefined);
    });
  });

  describe('validateChild', () => {
    beforeEach(() => {
      subject.getValidChildren = jest.fn();
    });

    it('should throw if getValidChildren returns undefined', () => {
      expect(() => subject.validateChild({}))
        .toThrow('Components must implement a getValidChildren method that returns an array of valid child types.');
    });

    it('should throw if child.type is undefined ', () => {
      subject.getValidChildren.mockReturnValue([]);
      expect(() => subject.validateChild({}))
        .toThrow('Components must have a type.');
    });

    it('should throw if child.type is not valid', () => {
      subject.getValidChildren.mockReturnValue([]);
      expect(() => subject.validateChild({ type: 'TestComponent' }))
        .toThrow('TestComponent is not a valid child of undefined');
    });
  });
});
