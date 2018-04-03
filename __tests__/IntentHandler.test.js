import { createElement } from 'react';
import IntentHandler from '../src/components/IntentHandler';
import { renderAlexaResponse } from '../src/renderer';

jest.mock('react');
jest.mock('../src/renderer');

describe('IntentHandler', () => {
  let subject;

  beforeEach(() => {
    createElement.mockReturnValue('<Element/>');
    subject = new IntentHandler();
  });

  it('should have base properties', () => {
    expect(subject).toMatchSnapshot();
  });

  describe('getValidChildren', () => {
    it('should return array of valid child types', () => {
      expect(subject.getValidChildren()).toEqual(['Response']);
    });
  });

  describe('render ', () => {
    beforeEach(() => {
      subject.renderChildren = jest.fn();
      subject.render('sample context');
    });

    it('should call renderChildren passing args', () => {
      expect(subject.renderChildren).toHaveBeenCalledWith('sample context');
    });
  });

  describe('render children', () => {
    it('should throw when there are no children', () => {
      expect(() => subject.renderChildren())
        .toThrow('IntentHandler must implement `handler` prop when used without children.');
    });

    it('should throw when there are multiple children', () => {
      subject.appendChild({ type: 'Response' });
      subject.appendChild({ type: 'Response' });
      expect(() => subject.renderChildren())
        .toThrow('IntentHandler can only wrap a single <Response> child.');
    });

    it('should create and render a RESPONSE element', () => {
      const props = { children: [] };
      subject.appendChild({ type: 'Response', props });
      subject.renderChildren('context');
      expect(renderAlexaResponse).toHaveBeenCalledWith('<Element/>', 'context');
    });

    describe('when handler prop is defined', () => {
      beforeEach(() => {
        subject.props.handler = jest.fn();
      });

      describe('and does not return a Response', () => {
        beforeEach(() => {
          subject.props.handler.mockReturnValue({});
        });

        it('should throw', () => {
          expect(() => subject.renderChildren())
            .toThrow('IntentHandler handler function must return a <Response> element.');
        });
      });

      describe('and returns Response', () => {
        const ResponseEl = { type: 'RESPONSE' };

        beforeEach(() => {
          subject.props.handler.mockReturnValue(ResponseEl);
          subject.renderChildren('context');
        });

        it('should render response', () => {
          expect(renderAlexaResponse).toHaveBeenCalledWith(ResponseEl, 'context');
        });
      });
    });
  });
});
