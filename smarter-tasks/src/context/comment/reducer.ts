// as we have created types of all thse imports in type.ts  using enum
// error free coding with Enums
// Steps to create context...
// create types -> reducer -> context -> actions

import { CommentActions, CommentState, CommentAvailableAction } from "./types";
export const initialState: CommentState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: CommentState = initialState,
  action: CommentActions
): CommentState => {
  switch (action.type) {
    case CommentAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: action.payload };
    case CommentAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case CommentAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentAvailableAction.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
        isLoading: false,
      };
    case CommentAvailableAction.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
