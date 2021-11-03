import { ActionType } from '../action-types';
import { Action } from '../actions';

interface CommentsState {
  comments: string[];
}

export const commentsReducer = (
  state: CommentsState = {
    comments: [],
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.SAVE_COMMENT:
      return {
        comments: [...state.comments, action.payload.comment],
      };

    default:
      return state;
  }
};
