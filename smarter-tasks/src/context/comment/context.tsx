import React, { createContext, useContext, useReducer } from "react";
import { CommentState, CommentsDispatch } from "./types";
import { initialState, reducer } from "./reducer";

//create context for state and dispatch
const CommentStateContext = createContext<CommentState>(initialState);
const CommentDispatchContext = createContext<CommentsDispatch>(() => {});

// create a provider for comments   that includes creation of useReducer which returns state and dispatch   we can pass it to children

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Create a state and dispatch with `useReducer` passing in the `reducer` which we have created in reducer.ts and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentStateContext);
export const useCommentsDispatch = () => useContext(CommentDispatchContext);
