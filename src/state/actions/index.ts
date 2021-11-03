import { ActionType } from '../action-types';

export const saveComment = (comment: string) => {
  return {
    type: ActionType.SAVE_COMMENT,
    payload: {
      comment,
    },
  };
};

export type Action = ReturnType<typeof saveComment>;
