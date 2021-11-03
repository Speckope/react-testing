import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

beforeEach(() => {
  wrapped = shallow(<App />);
});
it('shows a CommentBox', () => {
  // Find returns an array so we read length of it and match it to 1.
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a CommentList', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
