import * as React from 'react';

import { mount, ReactWrapper } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  // This before each will run only for tests inside describe
  beforeEach(() => {
    // use html name of the event, not React one.
    wrapped.find('textarea').simulate('change', {
      // It goes to our onChange and replaces event with this object!
      target: { value: 'new comment' },
    });
    // Rerenders React component.
    // As setState is asnychronous, we need to force a rerender
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('empties textarea when submitted', () => {
    wrapped.find('textarea').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
